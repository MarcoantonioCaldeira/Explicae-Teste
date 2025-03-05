import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; 

// Configuração do Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', 
  },
});


createApp(App)
  .use(store) 
  .use(vuetify) 
  .mount('#app'); 