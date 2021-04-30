import LoginView from '@/components/templates/LoginView.vue'
import HomeView from '@/components/templates/HomeView.vue'

export default [{
  path: '/login',
  component: LoginView
}, {
  path: '/',
  component: HomeView,
  meta: { requiresAuth: true }
}]
