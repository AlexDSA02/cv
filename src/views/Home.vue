<template>
  <div class="flex flex-col">
    <Header @menuState="isMenuOpen = $event" />

    <div class="h-11 w-screen bg-bg_header block" />

    <div class="main-content" :class="{'blur-sm': isMenuOpen}">
    <big-image title="Degrees" sub-title="All my degrees and my school carrer" :image="degrees" text-color="white"/>
    <big-image class="mt-3" title="Experiences" sub-title="Check my work experiences" :image="experiences" text-color="black"/>
    <big-image class="mt-3" title="Contact" sub-title="Contact me and check my personal informations" :image="contact" text-color="white"/>

    <div class="mt-3 flex justify-evenly flex-col mdSmaller:flex-row">
      <small-image class="mdSmaller:mt-3 mt-0" title="zz" sub-title="tata tata tata" :image="iphoneWallpaper" text-color="white"/>
      <small-image class="mdSmaller:mt-3 mt-0" title="ee" sub-title="tata tata tata" :image="iphoneWallpaper" text-color="white"/>
    </div>
    <div class="mdSmaller:mt-3 mt-0 flex justify-evenly flex-col mdSmaller:flex-row">
      <small-image class="mdSmaller:mt-3 mt-0" title="toto" sub-title="tata tata tata" :image="iphoneWallpaper" text-color="white"/>
      <small-image class="mdSmaller:mt-3 mt-0" title="toto" sub-title="tata tata tata" :image="iphoneWallpaper" text-color="white"/>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue' // Chemin vers le fichier Header.vue
import iphoneWallpaper from '@/assets/iphone_wallpaper.jpg';
import experiences from '@/assets/experiences.jpg';
import degrees from '@/assets/degrees.jpg';
import screen1 from '@/assets/screen1.jpg';
import contact from '@/assets/contact.jpg';
import BigImage from "../components/BigImage.vue";
import SmallImage from "../components/SmallImage.vue";
export default {
  name: "Home",
  components: {
    SmallImage,
    BigImage,
    Header, // Déclare le composant
  },
  data() {
    return {
      isMenuOpen: false,
      degrees,
      screen1,
      contact,
      experiences,
      iphoneWallpaper,
    };
  },
};
</script>
<style scoped>
.blur-sm {
  filter: blur(4px); /* Applique un flou sur tout le site */
  transition: filter 0.4s ease-in-out; /* Transition fluide lors de l'application et de la suppression du flou */
}
.main-content {
  transition: filter 0.4s ease-in-out; /* Transition de retour */
}
</style>