<template>
  <div class="w-[24.5vw] h-full flex flex-col overflow-hidden group relative hover:cursor-pointer z-20 hover:z-0">
    <img class="h-full w-full object-cover transition-all duration-500
     ease-in-out group-hover:-translate-y-8 absolute  filter grayscale hover:grayscale-0"
         :src="requireImage">
    <p class="h-fit bg-black w-full py-[0.5vw] pl-[0.5vw] text-[2.5vw] font-black
            translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 absolute bottom-0">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import screen1 from '@/assets/screen1.jpg';
export default {
  name: "ImageHomeMenu",
  components: {},
  data() {
    return {
      screen1,
    }
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  computed: {
    requireImage() {
      return new URL(this.picture, import.meta.url).href;
    }
  }
};
</script>