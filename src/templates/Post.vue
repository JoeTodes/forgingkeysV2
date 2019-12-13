<template>
    <Layout>
        <h1>{{$page.post.title}}</h1>
        <VueRemarkContent />
        <div class="h-32"></div>
    </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>

<style>
p > img {
    max-height: 32rem;
    @apply mx-auto shadow-md;
}
</style>