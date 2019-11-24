<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="container mx-auto mt-48">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>


