<template>


    <header class="fixed top-0 left-0 w-screen z-20">
        <div class="h-6 bg-accent-blue"></div>

        <transition name="nav-scroll">
            <nav
                v-if="!scrollingDown"
                class="w-screen flex justify-between items-center p-4 bg-white z-10"
            >
                <g-link to="/">
                    <Logo />
                </g-link>

                <ul
                    class="uppercase hidden md:flex tracking-tight text-block-yellow font-default font-black text-3xl lg:text-4xl"
                >
                    <li class="mx-6">
                        <g-link exact-active-class="underline" class="outlined" to="/">Home</g-link>
                    </li>
                    <li class="mx-6">
                        <g-link exact-active-class="underline" class="outlined" to="/about/">About</g-link>
                    </li>
                </ul>
                <div style="width: 64px"></div>
            </nav>
        </transition>
    </header>

</template>

<script>
import Logo from "~/assets/svgs/fkicon.svg";

export default {
    name: "Header",
    components: {
        Logo
    },
    data: function() {
        return {
            scrollingDown: false,
            lastYOffset: 0
        };
    },
    methods: {
        handleScroll(event) {
            if (window.pageYOffset > this.lastYOffset) {
                this.scrollingDown = true;
            } else {
                this.scrollingDown = false;
            }
            this.lastYOffset = window.pageYOffset;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

<style scoped>
nav {
    transform-origin: 0% 0%;
}

.nav-scroll-enter,
.nav-scroll-leave-to {
    transform: scaleY(0);
    transition: all 0.2s ease;
}

.nav-scroll-enter-active,
.nav-scroll-leave-active {
    transition: all 0.2s ease;
}

.outlined {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
}
</style>