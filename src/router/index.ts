import { createRouter, createWebHistory } from 'vue-router';

// Import des pages
import Home from '@/views/Home.vue';
import Home2 from '@/views/Home2.vue';
import Skills from "@/views/Skills.vue";
import Degrees from "@/views/Degrees.vue";
import Experiences from "@/views/Experiences.vue";
import About from "@/views/About.vue";
import Test from "@/views/Test.vue";

const routes = [
    { path: '/home', name: 'Home', component: Home },
    { path: '/', name: 'Home2', component: Home2 },
    { path: '/skills', name: 'Skills', component: Skills },
    { path: '/degrees', name: 'Degrees', component: Degrees },
    { path: '/experiences', name: 'Experiences', component: Experiences },
    { path: '/about', name: 'About', component: About },
    { path: '/test', name: 'Test', component: Test },
];

const router = createRouter({
    history: createWebHistory(), // Utilise l'historique de navigation HTML5
    routes, // Définis les routes
    scrollBehavior(_to, _from, savedPosition) {
        // Si on a une position sauvegardée (ex: retour arrière), on la restaure
        if (savedPosition) {
            return savedPosition;
        } else {
            // Sinon, on remonte tout en haut de la page avec un scroll fluide
            return { top: 0, behavior: 'smooth' };
        }
    }
});

export default router;