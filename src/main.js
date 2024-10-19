/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from './router/index'

// Components
import App1 from './App1.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App1)

registerPlugins(app)

import {Howl,Howler } from 'howler'

app.use(router)
app.mount('#app')
