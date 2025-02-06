<template>
  <div class="main bg-backgroundDarker h-full w-screen p-4 flex justify-center overflow-hidden max-w-full">
    <Header />
    <!--<img class="h-screen w-screen object-cover transition-all duration-500
     ease-in-out group-hover:-translate-y-2 fixed top-0"
         src="../assets/try5.jpg">-->
    <div class="h-fit flex flex-wrap gap-[4px] mt-28">
      <div class="bg-backgroundDark hidden md:flex 2xl:h-[16vw] 2xl:w-[16vw] lg:h-[18.8vw] lg:w-[18.8vw] md:h-[23.5vw] md:w-[23.5vw] h-[29vw]
      w-[29vw] rounded-3xl flex flex-col justify-center items-center max-w-full gap-2 ">
        <div v-for="(cat, index) in skillCat" :key="index" @click="selectCat(cat)" class="hover:bg-[rgb(80,80,80)] hover:cursor-pointer bg-[rgb(50,50,50)] h-[15%] w-[90%] rounded-3xl flex justify-between px-[1vw] items-center">
          <p class="font-extrabold text-colorTextGray">{{ cat }}</p>
          <p class="font-extrabold text-colorTextGray">{{ nbrSkillInCat(cat) }}</p>
        </div>
      </div>
      <div v-for="(skill, index) in filteredSkills" :key="index" class="lplp">
        <skills-cart :stars="skill.stars" :skill="skill.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { skills } from "@/data/skillsData";
import try1 from '@/assets/try1.jpg';
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
      try1,
      skillCat:["Backend","Frontend","Database","Tools","Methodologies"],
      catSelected:""
    };
  },
  computed: {
    // Filtrer les compétences en fonction de la catégorie sélectionnée
    filteredSkills() {
      if (this.catSelected!==""){
        return this.skills.filter(skill => skill.category === this.catSelected);
      }
      else {
        return this.skills;
      }
    }
  },
  methods: {
    selectCat(cat){
      console.log(cat)
      if (this.catSelected === cat){
        this.catSelected = ""
      }
      else
      this.catSelected = cat
    },
    nbrSkillInCat(cat){
      return this.skills.filter(skill => skill.category === cat).length
    }
  }
};
</script>

<style scoped>
</style>