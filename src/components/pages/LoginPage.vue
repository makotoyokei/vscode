<template>
  <div class="login-page">
    <h1>ログインページ</h1>
    <LoginForm :onlogin="handleLogin"/>
  </div>
</template>

<script>
import LoginForm from '@/components/organisms/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },

  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          localStorage.setItem('token', this.$store.state.auth.token)
          this.$router.push({ path: '/tasks' })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}
</script>

<style scoped>
  .login-page {
    width: 320px;
    margin: auto;
  }
</style>
