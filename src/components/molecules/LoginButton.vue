<template>
  <div class="login-button">
    <Button
      @click="handleClick"
    >
      ログイン
    </Button>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'LoginButton',

  components: {
    Button
  },
  methods: {
    handleClick () {
      this.$router.push({ path: '/login' })
    }
  }
}

</script>

<style scoped>
  .login-button {
    width: 120px;
  }
</style>
