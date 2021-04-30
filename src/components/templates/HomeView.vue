<template>
  <div class="home-view">
    <div class="login">
      <div class="login-button">
        <LoginButton/>
      </div>
      <div class="logout-button">
        <LogoutButton/>
      </div>
    </div>
    <div>
      <h1>ホームページ</h1>
    </div>
  </div>
</template>

<script>
import LoginButton from '@/components/molecules/LoginButton.vue'
import LogoutButton from '@/components/molecules/LogoutButton.vue'

export default {
  name: 'HomeView',
  components: {
    LoginButton,
    LogoutButton
  }
}
</script>

<style scoped>
  .login {
    text-align: right;
  }
  .login-button {
    display: inline-block;
  }
  .login-button {
    display: inline-block;
  }

</style>
