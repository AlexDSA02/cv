<template>
  <div class="w-screen h-screen flex justify-evenly bg-black py-3">
    <!--<div class="transition-all rotate-45 h-screen w-24 bg-gradient-to-r from-yellow-500 to-pink-500 absolute z-10 animate-slide left-0 brightness-150 mix-blend-overlay"></div>-->
    <image-home-menu v-for="(page, index) in pages" :key="index" :text="page" />
  </div>
</template>

<script>
import iphoneWallpaper from '@/assets/iphone_wallpaper.jpg';
import screen1 from '@/assets/screen1.jpg';
import ImageHomeMenu from "../components/ImageHomeMenu.vue";
import {pages} from "@/data/pages";
export default {
  name: "Home2",
  components: {
    ImageHomeMenu,
  },
  data() {
    return {
      screen1,
      pages,
    };
  },
};
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(-100%); /* Commence à gauche de l'écran */
  }
  100% {
    transform: translateX(100vw); /* Se termine à droite de l'écran */
  }
}

.animate-slide {
  animation: slide 3s linear infinite; /* Animation de 5 secondes, répétée indéfiniment */
}

.bg-gradient-to-r {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5));
}

.brightness-150 {
  filter: brightness(1.5); /* Applique un éclat lumineux */
}

.mix-blend-overlay {
  mix-blend-mode: overlay; /* Mélange l'effet avec les éléments sous-jacents */
}
</style>