import LoginView from '@/components/templates/LoginView.vue'
import HomeView from '@/components/templates/HomeView.vue'
import { authorizeTokenForLogin } from './guards'

export default [{
  path: '/login',
  component: LoginView,
  beforeEnter: authorizeTokenForLogin
}, {
  path: '/',
  component: HomeView,
  meta: { requiresAuth: true }
}]
