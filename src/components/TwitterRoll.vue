<template>
    <div class="h-full p-2">
        <div class="h-full border-black border-2 p-2">
            <div class="h-full overflow-y-scroll">
                <g-link
                    class="twitter-timeline text-default font-bold"
                    to="https://twitter.com/unzinc?ref_src=twsrc%5Etfw"
                >Loading...</g-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function() {
        let twitterScript = document.createElement("script");
        twitterScript.setAttribute(
            "src",
            "https://platform.twitter.com/widgets.js"
        );
        twitterScript.async = true;
        twitterScript.charset = "utf-8";
        document.head.appendChild(twitterScript);
    }
};
</script>