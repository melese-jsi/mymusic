import { createMemoryHistory, createRouter } from 'vue-router'

import App from  '../App.vue'
import App1 from '../App1.vue'
import AlbumDetail from '@/components/AlbumDetail.vue'


const routes = [
  { path: '/', component: App1 },
  { path: '/app', component: App },
  {
    path: '/albumDetail', component: AlbumDetail
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
