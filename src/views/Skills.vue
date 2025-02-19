<template>
  <div
      class="main bg-backgroundDarker h-full w-screen p-4 flex justify-center overflow-hidden max-w-full animate-fade-in"
  >
    <Header />
    <div class="h-fit flex flex-wrap gap-[4px] mt-28">
      <!-- Bloc Catégories -->
      <div
          class="bg-backgroundDark hidden md:flex 2xl:h-[16vw] 2xl:w-[16vw] lg:h-[18.8vw] lg:w-[18.8vw] md:h-[23.5vw] md:w-[23.5vw] h-[29vw]
      w-[29vw] rounded-3xl flex flex-col justify-center items-center max-w-full gap-2 animate-slide-in"
      >
        <div
            v-for="(cat, index) in skillCat"
            :key="index"
            @click="selectCat(cat)"
            :class="{
            'bg-[rgb(80,80,80)] scale-105': catSelected === cat,
            'hover:bg-[rgb(80,80,80)]': true
          }"
            class="hover:cursor-pointer bg-[rgb(50,50,50)] h-[15%] w-[90%] rounded-3xl flex justify-between px-[1vw] items-center transition-all duration-300"
        >
          <p class="md:font-extrabold text-colorTextGray">{{ cat }}</p>
          <p class="md:font-extrabold text-colorTextGray">{{ nbrSkillInCat(cat) }}</p>
        </div>
      </div>

      <!-- Bloc Compétences -->
      <div
          v-for="(skill, index) in filteredSkills"
          :key="index"
          class="lplp animate-fade-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <skills-cart :stars="skill.stars" :skill="skill.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { skills } from "@/data/skillsData";
import SkillsCart from "@/components/SkillsCart.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Skills",
  components: {
    SkillsCart,
    Header,
  },
  data() {
    return {
      skills,
      skillCat: ["Backend", "Frontend", "Database", "Tools", "Methodology"],
      catSelected: "",
    };
  },
  computed: {
    filteredSkills() {
      return this.catSelected !== ""
          ? this.skills.filter((skill) => skill.category === this.catSelected)
          : this.skills;
    },
  },
  methods: {
    selectCat(cat) {
      this.catSelected = this.catSelected === cat ? "" : cat;
    },
    nbrSkillInCat(cat) {
      return this.skills.filter((skill) => skill.category === cat).length;
    },
  },
};
</script>

<style scoped>
/* Fade-in au chargement */
@keyframes fadeIn {
  from {
    opacity: 0.98;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

/* Slide-in pour le bloc catégories */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-in {
  animation: slideIn 0.8s ease-out;
}

/* Apparition progressive des compétences */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
  opacity: 0; /* Cache l'élément avant l'animation */
}
</style>