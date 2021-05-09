// templatesにHeaderのコンポーネントがあるのはおかしい
// templatesはレイアウトに責務を持つコンポーネントを置く
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
      // どうせならasync await使おう。より簡潔に書ける
      return this.$store.dispatch('logout')
        .then(() => {
          localStorage.removeItem('token')
          this.$router.push({ path: '/login' })
        })
        .catch(err => this.throwReject(err))
    },
    // 特に問題はないけどこれメソッド化してるのなんで？
    throwReject (err) { return Promise.reject(err) }
  }
}

</script>

<style scoped>
  .logout {
    text-align: right;
    margin-right: 20px;
    /* marginはこのコンポーネントを使う側で調整する */
  }
  .logout-button {
    width: 110px;
    border: 0px;
  }
  .header {
    background-color: #555555;
    margin-bottom: 10px;
    /* marginはこのコンポーネントを使う側で調整する */
  }
</style>
