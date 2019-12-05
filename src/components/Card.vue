<template>
  <span id="hovercard" class="relative group">
    <span class="text-accent-blue font-bold">{{name}}</span>
    <div
      class="absolute w-48 sm:w-64 whitespace-no-wrap top-100 left-0 invisible group-hover:visible"
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
      cotaData: data
    };
  },
  computed: {
    img: function() {
      let url = "";
      if (this.name) {
        this.cotaData.forEach(card => {
          if (card.card_title.toLowerCase() == this.name.toLowerCase()) {
            url = card.front_image;
          }
        });
        if (!url) {
          this.cotaData.forEach(card => {
            if (
              card.card_title.toLowerCase().includes(this.name.toLowerCase())
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
.top-100 {
  top: 100%;
}
</style>