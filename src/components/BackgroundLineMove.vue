<template>
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden bg-[#121212]">
    <div v-for="i in totalLines" :key="i"
         class="absolute top-0 h-full w-[1.5px] bg-[#f6b846] opacity-10 animate-line"
         :style="{ left: `${(i / totalLines) * 100}vw`, animationDelay: `${Math.random() * 2}s` }">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  totalLines: {
    type: Number,
    default: Math.floor(window.innerWidth / 30), // Ajuste le nombre de lignes dynamiquement
  },
});
import { ref, onMounted, onUnmounted } from 'vue';

// Déclaration de la variable réactive pour le nombre de lignes
const numLines = ref(0);

// Fonction pour mettre à jour dynamiquement le nombre de lignes visibles
const updateLines = () => {
  numLines.value = Math.floor(window.innerWidth / 50);
};

// Exécuter la fonction une première fois lors du montage du composant
onMounted(() => {
  updateLines();
  window.addEventListener("resize", updateLines);
});

// Nettoyer l'event listener lors du démontage du composant
onUnmounted(() => {
  window.removeEventListener("resize", updateLines);
});
</script>

<style scoped>
@keyframes lineAnimation {
  0% { opacity: 0; transform: scaleY(0); }
  50% { opacity: 0.5; transform: scaleY(1); }
  100% { opacity: 0; transform: scaleY(0); }
}

.animate-line {
  animation: lineAnimation 2.5s infinite ease-in-out;
}
</style>