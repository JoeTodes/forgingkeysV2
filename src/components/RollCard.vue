<template>
    <div class="group">
        <div class="p-1 sm:p-2 group-hover:p-4">
            <div class="border-black border-2 group-hover:border-accent-blue p-1 sm:p-2">
                <g-image class="w-full" :src="cover"></g-image>
                <div class="bg-accent-blue w-full h-4"></div>
                <div class="bg-white w-full pt-1 sm:pt-2">
                    <div
                        class="truncate text-2xl sm:text-lg lg:text-lg leading-tight text-black group-hover:text-accent-blue font-default tracking-normal font-extrabold uppercase"
                    >{{title}}</div>
                    <div class="flex w-full items-baseline justify-between mt-0">
                        <div
                            class="text-accent-blue align-baseline leading-tight text-left text-xl sm:text-lg font-default font-medium tracking-wider"
                        >by {{author}}</div>
                        <div
                            class="-mb-1 text-black text-xl sm:text-lg align-baseline font-default text-right font-medium"
                        >{{fDate}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "date", "author", "cover"],
    computed: {
        fDate() {
            var day = new Date(this.date);
            var options = {
                year: "numeric",
                month: "short",
                day: "2-digit"
            };
            return day.toLocaleDateString("en-US", options);
        }
    }
};
</script>
