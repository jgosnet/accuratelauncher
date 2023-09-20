import { createApp } from 'vue'
import App from './App.vue'
import {store} from "@/store/store";

// vuediff
import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';
// extend python language
import python from 'highlight.js/lib/languages/python';

VueDiff.hljs.registerLanguage('python', python);

// cookies
import VueCookies from 'vue-cookies'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import {VDataTable} from "vuetify/labs/VDataTable";

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
  components: {
    ...components,
    ...labsComponents,
    VDataTable
  },
  directives,
})


import Clipboard from 'v-clipboard'
import JsonViewer from 'vue-json-viewer'

export const Vue = createApp(App)
  .use(vuetify)
  .use(Clipboard)
  .use(JsonViewer)
  .use(store)
  .use(VueCookies)
  .use(VueDiff, {
    componentName: 'Diff',
  })
  .mount('#app')


