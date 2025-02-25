<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker animate-fade-in">
    <Header />
    <background-line-move />
    <div class="z-10 h-full w-[75%] bg-backgroundDark pt-[75px] flex items-center flex-col self-center pb-14">
      <!-- Titre -->
      <div class="h-fit w-full flex items-center">
        <p class="w-full font-bold overflow-hidden text-center h-fit tracking-wide mb-3 text-[30px] relative">
          EXPERIENCES
          <span class="underline-animation"></span>
        </p>
      </div>
      <div class="bg-lineOrange w-full h-[0.1rem]"></div>

      <!-- Expériences avec animation -->
      <div v-for="(experience, index) in Experiences" :key="index"
           class="flex flex-col items-center animate-slide-up"
           :style="{ animationDelay: `${index * 0.5}s` }">
        <ExperienceDiv :date="experience.date" :jobName="experience.jobName" :companyName="experience.companyName"
                       :location="experience.location" :company-description="experience.companyDescription" :description="experience.description"/>
        <div v-if="index !== Experiences.length - 1" class="ligne-vertical h-28 w-[0.1rem] bg-lineOrange my-6" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { Experiences } from "@/data/experiences";
import ExperienceDiv from "@/components/ExperienceDiv.vue";
import BackgroundLineMove from "../components/BackgroundLineMove.vue";

export default {
  name: "Experiences",
  components: {
    BackgroundLineMove,
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
/* Effet de fade-in doux pour la page */
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

/* Slide-up progressif pour chaque expérience */
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

/* Animation de soulignement pour le titre */
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