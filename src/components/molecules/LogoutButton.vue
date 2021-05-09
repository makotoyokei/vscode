// このコンポーネントorganismじゃない？
// ヘッダー以外では使わなそう
<template>
  <div class="logout-button">
    <Button
      @click="handleClick"
    >
      ログアウト
    </Button>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'LogoutButton',

  components: {
    Button
  },

  methods: {
    handleClick () {
      return this.$store.dispatch('logout')
        .then(() => {
          localStorage.removeItem('token')
          this.$router.push({ path: '/login' })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}

</script>

<style scoped>
  .logout-button {
    width: 120px;
  }
</style>
