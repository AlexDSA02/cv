<template>
  <div class="flex flex-col gap-5 items-center w-full">
    <p class="text-center tracking-wider font-bold overflow-hidden border px-3 rounded-md w-fit mt-6 text-orange border-orange">{{ date }}</p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden">{{ schoolName }}</p>
    <p class="text-center tracking-wider  w-[70%] font-bold overflow-hidden text-textDark">{{ description }}</p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden text-textDark">{{ location }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "SchoolDiv",
  components: {},
  data() {
    return {
    }
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>