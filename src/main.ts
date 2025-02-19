import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import './style.css';

import Particles from "vue3-particles";

const app = createApp(App);

app.use(router);
app.use(Particles); // Utiliser le plugin correctement

app.mount('#app'); // Monter l'application à la fin