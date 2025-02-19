<template>
  <div class="fixed w-screen h-full flex flex-row overflow-hidden gap-x-10">
    <div v-for="index in numLines" :key="index" class="h-full w-[1px] bg-orange-500"></div>
  </div>
</template>

<script setup lang="ts">
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