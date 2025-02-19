<template>
  <header class="bg-transparent text-black fixed w-full left-0 top-0 z-50 transition-colors duration-500 ease-in-out">
    <nav class="px-[20%] flex justify-between h-11 md:flex flex bg-backgroundDarker bg-opacity-60" @mouseleave="activeIndex = null">
        <ul class="flex-1 justify-between self-center flex h-full mt-6">
          <li v-for="(page, index) in pages" :key="index" class="relative items-center" @mouseover="activeIndex = index">
            <router-link
                :to="getRoute(page.pathRouterLink)"
                class="hover:text-white hover:cursor-pointer text-colorTextGray text-xs h-full content-center"
            >
              {{ page.namePage }}
            </router-link>
          </li>
        </ul>
      </nav>
      <!--<div class="md:hidden flex h-11 items-center justify-end px-4">
        <div @click="toggleMenu" class="space-y-1 cursor-pointer">
          <span
              :class="menuOpen ? 'transform  translate-y-1.5' : ''"
              class="block w-5 h-0.5 bg-black transition-transform duration-700 ease-in-out"
          ></span>
          <span
              :class="menuOpen ? 'transform -rotate-90 ' : ''"
              class="block w-5 h-0.5 bg-black transition-transform duration-700 ease-in-out"
          ></span>
        </div>
      </div>-->
  </header>
</template>

<script>
import ImageHomeMenu from "./ImageHomeMenu.vue";
import {pages} from "../data/pages";
export default {
  name: "Header",
  components: {ImageHomeMenu},
  data() {
    return {
      activeIndex: null, // Index actif pour savoir quelle div afficher
      menuOpen: false,
      pages,
    };
  },
  computed: {
    isMenuOpen() {
      return this.activeIndex !== null; // Retourne true si un menu est ouvert
    },
  },
  methods: {
    getRoute(page) {
      const routes = {
        "Home": "/home",
        "Home2": "/",
        "Skills": "/skills",
        "Degrees": "/degrees",
        "Experiences": "/experiences",
        "About": "/about",
      };
      return routes[page] || "/";
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDiv(index) {
      this.activeIndex = this.activeIndex === index ? null : index; // Active/désactive l'index
    },
  },
  watch: {
    isMenuOpen(newVal) {
      console.log(newVal ? 'TOTO' : 'TOTO2'); // Vérifie dans la console
      this.$emit("menuState", newVal); // Émet true ou false
    }
  },
};
</script>
<style scoped>
</style>