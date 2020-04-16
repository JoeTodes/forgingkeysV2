<template>
    <Layout>
        <div class="relative">
            <div class="w-full sm:w-8/12">
                <FeatureCard
                    :title="$page.posts.edges[0].node.title"
                    :date="$page.posts.edges[0].node.date"
                    :author="$page.posts.edges[0].node.author"
                    :cover="$page.posts.edges[0].node.coverimg"
                />
            </div>

            <div class="hidden sm:block w-4/12 absolute top-0 right-0 bottom-0">
                <TwitterRoll />
            </div>
        </div>
        <div class="flex flex-wrap">
            <g-link
                class="w-full sm:w-1/2 lg:w-1/3"
                v-for="edge in $page.posts.edges.slice(1)"
                :key="edge.node.id"
                :to="edge.node.path"
            >
                <RollCard
                    :title="edge.node.title"
                    :date="edge.node.date"
                    :author="edge.node.author"
                    :cover="edge.node.coverimg"
                />
            </g-link>
        </div>
    </Layout>
</template>

<page-query>
query{
  posts: allPost(sortBy: "date", order: DESC){
    edges{
      node{
        title
        date
        path
        author
        coverimg
        
      }
    }
  }
}
</page-query>

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
