<template>
    <Layout>
        <h1>{{$page.post.title}}</h1>
        <VueRemarkContent />
        <Comments class="mt-16" />
    </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>

<script>
import axios from "axios";
import Bottleneck from "bottleneck";

export default {
    data() {
        return {
            deckNames: [],
            deckData: {},
            index: 0
        };
    },
    created: function() {
        this.$root.$on("decklist", name => {
            this.onDecklistRegistered(name);
        });
    },
    mounted: function() {
        console.log(this.deckNames);
    },
    updated: function() {
        const limiter = new Bottleneck({
            minTime: 2000
        });

        async function getDeckData(parsedUrl) {
            const axiosConfig = {
                url: parsedUrl,
                method: "get"
            };
            return axios(axiosConfig);
        }

        const throttleLimitedGetDeckData = limiter.wrap(getDeckData);

        async function getAllDecks(decks) {
            const allThePromises = decks.map(deck => {
                const query =
                    "https://www.keyforgegame.com/api/decks/?search=" +
                    deck +
                    "&links=cards";
                return throttleLimitedGetDeckData(query);
            });
            try {
                const results = await Promise.all(allThePromises);
                return results;
            } catch (err) {
                console.log(err);
            }
        }
        getAllDecks(this.deckNames).then(res => {
            this.deckData = res;
            this.$root.$emit("deckListsGot");
        });
    },
    methods: {
        onDecklistRegistered: function(name) {
            if (!this.deckNames.includes(name)) {
                this.deckNames.push(name);
            }
        }
    }
};
</script>

<style>
p > img {
    max-height: 32rem;
    @apply mx-auto shadow-md my-4;
}

h1 {
    @apply font-default font-extrabold text-3xl my-4 uppercase;
}

p {
    @apply font-copy tracking-wider;
}

h2,
h3 {
    @apply font-default font-bold text-2xl my-2;
}
</style>