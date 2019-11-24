<template>
  <Layout>
    <div class="flex">
      <div class="w-8/12">
        <FeatureCard />
      </div>

      <div class="w-4/12">
        <TwitterRoll />
      </div>
    </div>
    <div class="flex flex-wrap">
      <RollCard />
      <RollCard />
      <RollCard />
      <RollCard />
      <RollCard />
      <RollCard />
    </div>
  </Layout>
</template>

<script>
import FeatureCard from "~/components/FeatureCard.vue";
import RollCard from "~/components/RollCard.vue";
import TwitterRoll from "~/components/TwitterRoll.vue";
export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    FeatureCard,
    RollCard,
    TwitterRoll
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
