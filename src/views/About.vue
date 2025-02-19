<template>
  <div class="w-screen h-full flex justify-center bg-backgroundDarker">
    <Header />
    <BackgroundLineMove />
    <div class="z-10 h-full w-[75%] bg-backgroundDark pt-[75px] flex items-center flex-col self-center animate-fade-in">
      <div class="h-fit w-full flex items-center">
        <p class="w-full font-bold text-center tracking-wide mb-3 text-3xl text-white">ABOUT</p>
      </div>
      <div class="bg-lineOrange w-full h-[2px]"></div>

      <div class="mt-6 flex justify-center">
        <div class="w-[85%] md:w-[60%] text-gray-300 text-[13px] md:text-lg text-left">
          <span v-for="(line, index) in aboutText" :key="index"
                v-html="line"
                class="opacity-0 block animate-line-fade-in"
                :style="{ animationDelay: `${index * 0.2}s` }">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BackgroundLineMove from "../components/BackgroundLineMove.vue";
export default {
  name: "About",
  components: {
    BackgroundLineMove,
    Header,
  },
  data() {
    return {
    aboutText: [
      "I’m currently in <span class='text-orange font-semibold'>New York</span> until <span class='text-orange font-semibold'>April 20th</span> on an ESTA visa, looking for a company that could sponsor my work visa so I can relocate and build my career here.",
      "My passion for technology started nearly <span class='text-orange font-semibold'>15 years ago</span> when I was just a curious child building websites for fun. What began as a simple hobby quickly turned into a deep love for coding, problem-solving, and creating meaningful digital experiences.",
      "Recently, I took a <span class='text-orange font-semibold'>big risk</span> by leaving my last freelance mission at <span class='text-orange font-semibold'>Adeo</span>, a major French company with over <span class='text-orange font-semibold'>100,000 employees</span> worldwide and more than <span class='text-orange font-semibold'>€30 billion in revenue</span>, to pursue my dream of building a life and career in New York.",
      "Beyond technology, <span class='text-orange font-semibold'>football</span> has been a lifelong passion of mine, teaching me discipline, teamwork, and strategic thinking—qualities that have shaped both my personal and professional life.",
      "I’m eager to bring my skills, dedication, and passion to a company that values innovation and is open to sponsoring international talent."
    ]
  };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0.98;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

/* ✨ Amélioration de l'effet ligne par ligne */
@keyframes lineFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-line-fade-in {
  animation: lineFadeIn 0.8s ease-out forwards;
  display: inline-block; /* ✅ Affichage fluide */
  width: 100%;
  margin-bottom: 12px; /* ✅ Plus d’espace entre chaque ligne */
  line-height: 1.8; /* ✅ Augmente l'espacement vertical */
}

/* ✅ Responsive : Aligner le texte à gauche sur desktop et centré sur mobile */
@media (max-width: 768px) {
  .animate-line-fade-in {
    text-align: center;
    margin-bottom: 10px; /* ✅ Légèrement réduit sur mobile */
  }
}
</style>