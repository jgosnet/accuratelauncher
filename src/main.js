import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import { routes } from './router';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
