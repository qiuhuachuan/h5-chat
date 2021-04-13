import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: () => import('../pages/chat/Chat.vue')
  }
]

const router = createRouter(
  {
    history: createWebHistory(process.env.BASE_URL),
    routes
  }
)

export default router;