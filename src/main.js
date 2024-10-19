/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App1 from './App1.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App1)

registerPlugins(app)



app.mount('#app')
