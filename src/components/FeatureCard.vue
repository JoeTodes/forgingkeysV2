<template>
  <div class="group p-1 sm:p-2">
    <div class="border-black border-2 group-hover:border-accent-blue p-1 sm:p-2">
      <g-image class="w-full" src="~/assets/images/125_cropped.png"></g-image>
      <div class="bg-accent-blue w-full h-4"></div>
      <div class="bg-white w-full pt-1 sm:pt-2 -mb-1">
        <div
          class="text-2xl lg:text-3xl leading-tight text-black group-hover:text-accent-blue font-default tracking-normal font-extrabold uppercase"
        >{{title}}</div>
        <div class="flex w-full items-baseline justify-between -mt-1">
          <div
            class="text-accent-blue leading-tight text-left text-xl font-default font-medium tracking-wider"
          >by unzinc</div>
          <div class="text-black text-xl font-default text-right font-medium">{{fDate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "author"],
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

