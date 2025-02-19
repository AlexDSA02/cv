<template>
  <Particles id="tsparticles" :options="particlesOptions" class="absolute top-0 left-0 w-full h-full" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      particlesOptions: {
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#f6b846" }, // Couleur des particules
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1, direction: "none", random: false, straight: false }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        }
      }
    };
  },
  mounted() {
    console.log("Le composant Particules est bien monté !");
  }
});
</script>

<style scoped>
/* Assure que les particules restent en arrière-plan */
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 50; /* Assure que les particules restent en arrière-plan */
  pointer-events: none; /* Empêche d'interférer avec les interactions */
}
</style>