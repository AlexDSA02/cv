<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker">
    <Header/>
    <div class="h-full w-[75%] bg-backgroundDark pt-[75px] flex items-center h-fit flex-col self-center">
      <div class="h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-3 text-[30px]">ABOUT</p>
      </div>
      <div class="bg-lineOrange w-full h-[0.1rem]"></div>
      <div class="mt-3 flex justify-center">
        <p class="w-[50%]">I’ve been coding for almost 15 years, starting as a curious child building websites just for fun. What began as a simple hobby soon transformed into a deep passion for technology and development. Over the years, I’ve honed my skills and expanded my knowledge, continually driven by the excitement of solving problems and creating meaningful digital experiences.

          Outside of the tech world, I’ve also been passionate about football since I was young. The discipline, teamwork, and strategy that football instilled in me have been key influences in both my personal and professional life. My journey through the world of coding and sports has shaped my drive for excellence and innovation, and I continue to be inspired by the ever-evolving landscape of technology.</p>
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