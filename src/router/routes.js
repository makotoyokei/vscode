import LoginPage from '@/components/pages/LoginPage.vue'
import HomeView from '@/components/templates/HomeView.vue'
import { authorizeTokenForLogin } from './guards'

export default [{
  path: '/login',
  component: LoginPage,
  beforeEnter: authorizeTokenForLogin
}, {
  path: '/',
  component: HomeView,
  meta: { requiresAuth: true }
}]
