import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // routes setup

// Create Vue application
const app = createApp(App);

// Use plugins
app.use(router);

// Mount the application
app.mount('#app');