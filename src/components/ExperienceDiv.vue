<template>
  <div class="flex flex-col gap-5 items-center w-full">
    <p class="text-center tracking-wider font-bold overflow-hidden border px-3 rounded-md w-fit mt-6 text-orange border-orange">{{ date }}</p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden">{{ companyName }}</p>
    <p class="text-center tracking-wider  w-[70%] font-bold overflow-hidden text-textDark">{{ jobName }}</p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden text-textDark">{{ location }}</p>
    <button @click="openLayer" class="w-[50%] text-center tracking-wider w-full font-bold overflow-hidden text-orange
    bg-backgroundDarker hover:bg-orange hover:text-backgroundDarker hidden md:block">See more</button>
    <div v-if="layerOpen === true" @click.stop :style="{ top: `${scrollPosition}px` }" class="lg:my-[12.5vh] my-[25vh] w-[50vw] z-50 lg:h-[75vh] h-[50vh] absolute bg-backgroundDarker text-textDark p-5">
      <button @click="closeLayer" class="absolute top-5 right-5 text-orange font-bold">X</button>
      <p class="text-center tracking-wider w-full font-bold overflow-hidden">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ExperienceDiv",
  components: {},
  data() {
    return {
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