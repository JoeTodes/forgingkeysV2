<template>
    <span id="hovercard" class="relative group">
        <span class="text-accent-blue font-bold">{{name}}</span>
        <div
            :class="{'hover-left':!isLeft, 'hover-right':isLeft}"
            class="absolute w-48 sm:w-64 whitespace-no-wrap invisible group-hover:visible"
        >
            <img :src="img" />
        </div>
    </span>
</template>

<script>
import data from "~/assets/data/card_data.json";
//TODO add AOA and WC
export default {
    props: ["name", "id"],
    data: function() {
        return {
            cotaData: data,
            isLeft: Boolean
        };
    },
    mounted: function() {
        var el = document.getElementById("hovercard");
        this.isLeft = el.offsetLeft > window.innerWidth / 2 ? false : true;
    },
    computed: {
        img: function() {
            let url = "";
            if (this.name) {
                this.cotaData.forEach(card => {
                    if (
                        card.card_title.toLowerCase() == this.name.toLowerCase()
                    ) {
                        url = card.front_image;
                    }
                });
                if (!url) {
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
            } else if (this.id) {
                this.cotaData.forEach(card => {
                    if (card.id == this.id) {
                        url = card.front_image;
                    }
                });
            }
            return url;
        }
    }
};
</script>

<style scoped>
.hover-left {
    right: 0%;
}

.hover-right {
    left: 0%;
}

.hover-bottom {
    top: 100%;
}

.hover-top {
    bottom: 100%;
}

.top-100 {
    top: 100%;
}
</style>