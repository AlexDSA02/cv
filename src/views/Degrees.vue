<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker">
    <Header />
    <div class="h-full w-[75%] pb-14 bg-backgroundDark pt-[75px] flex items-center h-fit flex-col self-center">
      <div class="border-b border-orange h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-6 text-[30px]">DEGREES</p>
      </div>
      <div v-for="(school, index) in Schools" :key="index" class="flex flex-col items-center">
        <SchoolDiv :date="school.date" :schoolName="school.schoolName"
                   :location="school.location" :description="school.description"/>
        <div v-if="index!==Schools.length-1" class="ligne-vertical border h-28 w-0 border-orange my-6" />
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