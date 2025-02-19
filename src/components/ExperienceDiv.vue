<template>
  <div class="flex flex-col gap-5 items-center w-full">
    <p class="text-center tracking-wider font-bold overflow-hidden border px-3 rounded-md w-fit mt-6 text-orange border-orange">{{ date }}</p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden">{{ companyName }}</p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden text-textDark">{{ location }}</p>
    <p class="text-center tracking-wider  w-[70%] font-bold overflow-hidden text-textDark">{{ jobName }}</p>
    <!--<button @click="openLayer" class="w-[50%] text-center tracking-wider w-full font-bold overflow-hidden text-orange
    bg-backgroundDarker hover:bg-orange hover:text-backgroundDarker hidden md:block">See more</button>

    <div v-if="layerOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div @click="closeLayer" class="absolute inset-0 bg-black opacity-50"></div>

      <div v-if="layerOpen" :style="{ top: `${modalTop}px` }"
           class="fixed left-1/2 transform -translate-x-1/2 z-50 w-[80vw] md:w-[50vw] lg:w-[40vw]
             bg-backgroundDarker text-textDark p-6 rounded-lg shadow-lg border border-orange">
        <button @click="closeLayer" class="absolute top-3 right-3 text-orange font-bold text-xl">✕</button>
        <p class="text-center tracking-wider w-full font-bold overflow-hidden">{{ description }}</p>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
export default {
  name: "ExperienceDiv",
  components: {},
  data() {
    return {
      modalTop: 0, // Position verticale de la modale
      layerOpen: false,
      scrollPosition: 0,
    }
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    openLayer() {
      document.body.classList.add("overflow-hidden"); // Empêche le scroll de la page
      this.scrollPosition = window.scrollY; // Stocke la position du scroll
      this.modalTop = window.scrollY + window.innerHeight / 2; // Place la modale au centre de l'écran
      this.layerOpen = true;
    },
    closeLayer() {
      console.log('TOTO')
      document.body.classList.remove("overflow-hidden"); // Réactive le scroll de la page
      this.layerOpen = false;
    }
  }
};
</script>

<style scoped>
body.overflow-hidden {
  overflow: hidden;
}
</style>