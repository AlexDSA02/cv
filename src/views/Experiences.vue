<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker">
    <Header />
    <div class="h-full w-[75%] bg-backgroundDark pt-[75px] flex items-center h-fit flex-col self-center pb-14">
      <div class="border-b border-orange h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-6 text-[30px]">Experiences</p>
      </div>
      <div v-for="(experience, index) in Experiences" :key="index" class="flex flex-col items-center">
        <ExperienceDiv :date="experience.date" :jobName="experience.jobName" :companyName="experience.companyName"
                   :location="experience.location" :description="experience.description"/>
        <div v-if="index!==Experiences.length-1" class="ligne-vertical border h-28 w-0 border-orange my-6" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { Experiences } from "@/data/experiences";
import ExperienceDiv from "@/components/ExperienceDiv.vue";
export default {
  name: "Experiences",
  components: {
    Header,
    ExperienceDiv
  },
  data() {
    return {
      Experiences
    };
  },
};
</script>

<style scoped>
</style>