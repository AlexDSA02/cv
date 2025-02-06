<template>
  <div class="custom-big-div-img" :style="{ backgroundImage: `url(${image})` }">
    <div class="flex flex-col items-center" :style="{ color: textColor }">
      <p class="text-[55px] font-bold mt-[55px]">{{ title }}</p>
      <p class="text-[28px] mt-[6px]">{{subTitle}}</p>
      <div class="mt-[6px]">
        <button class="rounded-full bg-transparent border-black text-black hover:bg-black hover:text-white focus:outline-none focus:ring-0 focus:border-transparent hover:filter-none transform transition-colors ease-linear duration-300">
          See more
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import iphoneWallpaper from "@/assets/iphone_wallpaper.jpg";
export default {
  name: "BigImage",
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      iphoneWallpaper,
    };
  },
};
</script>