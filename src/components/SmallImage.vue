<template>
  <div class="custom-small-div-img" :style="{ backgroundImage: `url(${image})` }">
    <div class="flex flex-col items-center" :style="{ color: textColor }">
      <p class="text-[55px] font-bold mt-[55px]">{{ title }}</p>
      <p class="text-[28px] mt-[6px]">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import iphoneWallpaper from "@/assets/iphone_wallpaper.jpg";
export default {
  name: "SmallImage",
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
    }
  },
  data() {
    return {
      iphoneWallpaper,
    };
  },
};
</script>