<template>
  <div class="header">
    <div class="logout">
      <Button
        class="logout-button"
        @click="handleClick"
      >
        ログアウト
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'Header',

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
  .logout {
    text-align: right;
    margin-right: 20px;
  }
  .logout-button {
    width: 110px;
    border: 0px;
  }
  .header {
    background-color: #555555;
  }
</style>
