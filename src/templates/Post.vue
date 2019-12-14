<template>
    <Layout>
        <h1>{{$page.post.title}}</h1>
        <VueRemarkContent />
        <Comments class="mt-16" />
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
    @apply mx-auto shadow-md my-4;
}
</style>