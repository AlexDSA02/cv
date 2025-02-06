import { createRouter, createWebHistory } from 'vue-router'

// Import des pages
import Home from '@/views/Home.vue'
import Home2 from '@/views/Home2.vue'
import Skills from "@/views/Skills.vue";
import Degrees from "@/views/Degrees.vue";
import Experiences from "@/views/Experiences.vue";
import About from "@/views/About.vue";

const routes = [
    { path: '/home', name: 'Home', component: Home }, // Route pour la page d'accueil
    { path: '/', name: 'Home2', component: Home2 }, // Route pour la page d'accueil
    { path: '/skills', name: 'Skills', component: Skills }, // Route pour la page d'accueil
    { path: '/degrees', name: 'Degrees', component: Degrees }, // Route pour la page d'accueil
    { path: '/experiences', name: 'Experiences', component: Experiences }, // Route pour la page d'accueil
    { path: '/about', name: 'About', component: About }, // Route pour la page d'accueil
]

const router = createRouter({
    history: createWebHistory(), // Utilise l'historique de navigation HTML5
    routes, // Définis les routes
})

export default router