<template>
    <div class>
        <br />

        <div class="flex">
            <div class="mx-auto shadow-md p-4">
                <div class="flex flex-col sm:flex-row mx-auto">
                    <div class="p-1 flex-shrink" v-for="name in this.newNames" :key="name">
                        <img :src="imgs[name.toLowerCase()]" />
                    </div>
                </div>

                <div class="caption pt-2" v-if="caption">{{caption}}</div>
            </div>
        </div>

        <br />
    </div>
</template>

<script>
import data from "~/assets/data/card_data.json";
export default {
    //TODO add AOA and WC
    props: { names: String, caption: String },
    data: function() {
        return {
            cotaData: data,
            newNames: String,
            imgs: {}
        };
    },
    
    mounted: function(){
        let urls = {};

            
            this.newNames = this.names.split(",")
            this.newNames.forEach(name => {
                this.cotaData.forEach(card => {
                    if (card.card_title.toLowerCase() == name.toLowerCase()) {
                        urls[name.toLowerCase()] = card.front_image;
                    }
                });
                if (!urls[name.toLowerCase()]) {
                    this.cotaData.forEach(card => {
                        if (
                            card.card_title
                                .toLowerCase()
                                .includes(name.toLowerCase())
                        ) {
                            urls[name.toLowerCase()] = card.front_image;
                        }
                    });
                }
            });
            this.imgs = urls;
    }
};
</script>