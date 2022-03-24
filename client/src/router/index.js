import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WordleView from '@/views/WordleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/wordle',
    component: WordleView
  },
  {
    path: '/wordle/:answer',
    component: WordleView,
    props: true
  },
  {
    path: '/wordle_input',
    component: function () {
      return import('../views/WordleForm.vue')
    }
  },
  {
    path: '/chat',
    component: function () {
      return import('../views/ChatView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
