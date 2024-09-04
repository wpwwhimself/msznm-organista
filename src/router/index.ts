import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "O mnie",
        icon: "??",
      }
    },
    {
      path: '/churches',
      name: 'churches',
      component: () => import('../views/ChurchesView.vue'),
      meta: {
        title: "Kościoły",
        icon: "??",
      }
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/RecordingsView.vue'),
      meta: {
        title: "Filmy",
        icon: "??",
      }
    },
  ]
})

export default router
