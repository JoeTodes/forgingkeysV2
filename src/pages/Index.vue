<template>
    <Layout>
        <div class="relative">
            <div class="w-full sm:w-8/12">
                <FeatureCard />
            </div>

            <div class="hidden sm:block w-4/12 absolute top-0 right-0 bottom-0">
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
