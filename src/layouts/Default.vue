<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <div class="container mx-auto mt-32 px-4 md:px-8 lg:px-32 xl:px-48">
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


