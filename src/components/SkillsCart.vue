<template>
  <div class="bg-backgroundDark 2xl:h-[16vw] 2xl:w-[16vw] lg:h-[18.8vw] lg:w-[18.8vw] md:h-[23.5vw] md:w-[23.5vw] h-[29vw] w-[29vw] rounded-3xl flex flex-col justify-center items-center">
    <p class="text-[150%] font-extrabold text-colorTextGray text-center">{{ skill }}</p>
    <div class="flex">
      <p v-for="(_, index) in Array.from({ length: stars })" class="text-yellow-500">★</p>
      <p v-for="(_, index) in Array.from({ length: 5 - stars })" >★</p>
    </div>
  </div>
</template>

<script lang="ts">
import star from '@/assets/star.jpg';
export default {
  name: "SkillsCart",
  components: {},
  data() {
    return {
      star,
    }
  },
  props: {
    skill: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  computed: {

  }
};
</script>