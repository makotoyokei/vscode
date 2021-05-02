import LoginPage from '@/components/pages/LoginPage.vue'
import HomePage from '@/components/pages/HomePage.vue'
import TaskPage from '@/components/pages/TaskPage.vue'
import { authorizeTokenForLogin } from './guards'

export default [{
  path: '/login',
  component: LoginPage,
  beforeEnter: authorizeTokenForLogin
}, {
  path: '/',
  component: HomePage,
  meta: { requiresAuth: true }
}, {
  path: '/tasks',
  component: TaskPage,
  meta: { requiresAuth: true }
}]
