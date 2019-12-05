<template>
    <div class>
        <br />

        <div>
            <div style="max-width: 300px" class="mx-auto sm:w-1/3 shadow-md rounded-t-xl">
                <img :src="img" />

                <div class="caption p-2" v-if="caption">{{caption}}</div>
            </div>
        </div>

        <br />
    </div>
</template>

<script>
import data from "~/assets/data/card_data.json";

export default {
    props: ["name", "caption"],
    data: function() {
        return {
            cotaData: data
        };
    },
    computed: {
        img: function() {
            let url = "";
            this.cotaData.forEach(card => {
                if (card.card_title.toLowerCase() == this.name.toLowerCase()) {
                    url = card.front_image;
                }
            });
            if (url.length > 0) {
                return url;
            } else {
                this.cotaData.forEach(card => {
                    if (
                        card.card_title
                            .toLowerCase()
                            .includes(this.name.toLowerCase())
                    ) {
                        url = card.front_image;
                    }
                });
            }
        }
    }
};
</script>
