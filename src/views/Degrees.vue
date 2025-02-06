<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker">
    <Header />
    <div class="h-full w-[75%] pb-14 bg-backgroundDark pt-[75px] flex items-center h-fit flex-col self-center">
      <div class="h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-3 text-[30px]">DEGREES</p>
      </div>
      <div class="bg-lineOrange w-full h-[0.1rem]"></div>
      <div v-for="(school, index) in Schools" :key="index" class="flex flex-col items-center">
        <SchoolDiv :date="school.date" :schoolName="school.schoolName"
                   :location="school.location" :description="school.description"/>
        <div v-if="index!==Schools.length-1" class="ligne-vertical h-28 w-[0.1rem] bg-lineOrange my-6" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SchoolDiv from "@/components/SchoolDiv.vue";
import {Schools} from "@/data/school";
export default {
  name: "Degrees",
  components: {
    Header,
    SchoolDiv,
  },
  data() {
    return {
      Schools,
    };
  },
};
</script>

<style scoped>
</style>