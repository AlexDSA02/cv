<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker animate-fade-in">
    <Header />
    <background-line-move />
    <div class="z-10 h-full w-[75%] pb-14 bg-backgroundDark pt-[75px] flex items-center flex-col self-center">

      <!-- Titre animé -->
      <div class="h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-3 text-[30px] relative">
          DEGREES
          <span class="underline-animation"></span>
        </p>
      </div>
      <div class="bg-lineOrange w-full h-[0.1rem]"></div>

      <!-- Liste des diplômes avec animation -->
      <div v-for="(school, index) in Schools" :key="index"
           class="flex flex-col items-center animate-slide-up"
           :style="{ animationDelay: `${index * 0.5}s` }">
        <SchoolDiv :date="school.date" :schoolName="school.schoolName"
                   :location="school.location" :description="school.description"/>
        <div v-if="index !== Schools.length - 1" class="ligne-vertical h-28 w-[0.1rem] bg-lineOrange my-6" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SchoolDiv from "@/components/SchoolDiv.vue";
import { Schools } from "@/data/school";
import BackgroundLineMove from "../components/BackgroundLineMove.vue";

export default {
  name: "Degrees",
  components: {
    BackgroundLineMove,
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
/* Effet de fade-in doux */
@keyframes fadeInSmooth {
  from {
    opacity: 0.98;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeInSmooth 1s ease-out;
}

/* Slide-up fluide pour chaque diplôme */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Animation de soulignement du titre */
.underline-animation {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #FF8C00;
  position: absolute;
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease-in-out;
}
p:hover .underline-animation {
  transform: scaleX(1);
}
</style>