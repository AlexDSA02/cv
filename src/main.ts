import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router' // Import du router
import './style.css'; // ou le fichier CSS où tu as les directives Tailwind

const app = createApp(App)
app.use(router) // Utilisation du router
app.mount('#app')