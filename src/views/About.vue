<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker">
    <Header/>
    <div class="h-full w-[75%] bg-backgroundDark pt-[75px] flex items-center h-fit flex-col self-center pb-14">
      <div class="border-b border-orange h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-6 text-[30px]">About</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "About",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>