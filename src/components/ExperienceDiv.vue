<template>
  <div class="flex flex-col gap-5 items-center w-full">
    <p class="text-center tracking-wider font-bold overflow-hidden border px-3 rounded-md w-fit mt-6 text-orange border-orange">
      {{ date }}
    </p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden">
      {{ companyName }}
    </p>
    <p class="text-center tracking-wider w-full font-bold overflow-hidden text-textDark">
      {{ location }}
    </p>
    <p class="text-center tracking-wider w-[70%] font-bold overflow-hidden text-textDark">
      {{ jobName }}
    </p>

    <!-- Bouton "Voir plus" / "Voir moins" -->
    <button
        v-if="!showDetails"
        @click="toggleDetails"
        class="hidden md:flex mt-2 px-6 py-2 bg-orange text-backgroundDarker font-bold rounded-lg hover:bg-orange-dark transition-all duration-300 transform hover:scale-105"
    >
      Voir plus
    </button>
    <button
        v-if="showDetails"
        @click="toggleDetails"
        class="hidden md:flex mt-2 px-6 py-2 bg-orange text-backgroundDarker font-bold rounded-lg hover:bg-orange-dark transition-all duration-300 transform hover:scale-105"
    >
      Voir moins
    </button>

    <!-- Modale avec transition -->
    <transition name="modal">
      <div v-if="showDetails" ref="modal" class="flex relative inset-0 z-50 w-[80vw] justify-center">
        <div class="flex-col bg-backgroundDarker p-8 rounded-xl shadow-2xl w-[90%] max-w-2xl relative border border-orange flex">

          <!-- En-tête avec titre centré -->
          <div class="relative w-full mb-4">
            <p class="text-orange text-lg font-bold text-center">
              {{ companyDescription }}
            </p>
          </div>

          <!-- Contenu de la modale -->
          <p class="text-textDark text-lg leading-relaxed">
            {{ description }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ExperienceDiv",
  props: {
    date: String,
    companyName: String,
    location: String,
    jobName: String,
    description: String,
    companyDescription: String,
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;

      // Attendre que le DOM soit mis à jour avant de scroller
      this.$nextTick(() => {
        if (this.showDetails && this.$refs.modal) {
          this.$refs.modal.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    },
  },
};
</script>
<style scoped>
/* Animation pour la modale */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Styles pour le bouton */
button {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
</style>