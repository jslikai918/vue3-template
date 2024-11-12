import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import './styles/index.css';
import i18n from './i18n';

createApp(App).use(router).use(pinia).use(i18n).mount('#app');