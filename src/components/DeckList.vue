<template>
    <div>
        <br />
        <div class="flex">
            <div class="mx-auto w-5/6 flex flex-col shadow-lg">
                <div
                    class="p-1 sm:p-2 lg:p-3 bg-accent-blue flex flex-col sm:flex-row items-center justify-between"
                >
                    <div
                        class="text-white text-center sm:text-left text-2xl font-bold font-default"
                    >
                        {{ properName.toUpperCase() }}
                    </div>
                    <div class="flex flex-row justify-between md:w-1/3">
                        <div
                            v-for="house in houses"
                            :key="house.name"
                            class="w-1/5 sm:w-1/3 sm:mx-1"
                        >
                            <img :src="house.image" />
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col sm:flex-row border-l border-b border-r border-gray-400"
                >
                    <div
                        class="sm:w-1/3"
                        v-for="(house, index) in houses"
                        :key="index"
                    >
                        <div class="font-default font-bold text-center">
                            {{ house.name }}
                        </div>
                        <div class="flex sm:flex-col flex-row flex-wrap">
                            <div
                                class="w-1/2 sm:w-auto flex justify-center sm:justify-start items-center"
                                v-for="(card, index) in finalCards"
                                :key="index"
                                v-show="card.house == house.name"
                            >
                                <Card
                                    class="mb-1 mx-2 font-default text-center sm:text-left text-xs md:text-sm"
                                    :name="card.card_title"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ["name"],
    data: function () {
        return {
            ready: false,
            parsedName: "",
            response: {},
            properName: "",
            cards: [],
            cardIDs: [],
            finalCards: [],
            houses: [],
            id: "",
            expansion: "",
            queryText: "",
        };
    },
    created: function () {
        this.parsedName = encodeURIComponent(this.name);
        /*
        this.parsedName = this.name.toLowerCase().replace(/ /g, "%20");
        this.parsedName = this.parsedName.replace(/"/g, "%22");
        this.parsedName = this.parsedName.replace(/,/g, "%2c");
        this.parsedName = this.parsedName.replace(/'/g, "%27");
*/
        this.$root.$emit("decklist", this.parsedName);
        this.$root.$on("deckListsGot", () => {
            this.get();
        });
    },

    methods: {
        get: function () {
            var index = this.$parent.$parent.$parent.$parent.deckNames.indexOf(
                this.parsedName
            );
            console.log(index);

            this.response = this.$parent.$parent.$parent.$parent.deckData[
                index
            ];
            this.properName = this.response.data.data[0].name;
            this.cards = this.response.data._linked.cards;
            this.cardIDs = this.response.data.data[0]._links.cards;
            this.houses = this.response.data._linked.houses;
            this.id = this.response.data.data[0].id;
            this.expansion = this.response.data.data[0].expansion;

            this.cardIDs.forEach((id) => {
                this.cards.forEach((card) => {
                    if (id == card.id) {
                        this.finalCards.push(card);
                    }
                });
            });

            this.ready = true;
        },
    },
};
</script>