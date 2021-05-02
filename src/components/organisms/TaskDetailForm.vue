<template>
  <div>
    <div>
      <p class="label">
        タスク名
      </p>
      <input
        type="text"
      >
    </div>
    <div>
      <p class="label">
        説明
      </p>
      <input
        type="text"
      >
    </div>
    <div>
      <Button
        class="button"
        @click="updateTask"
      >
        更新
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskDetailForm',
  components: {
    Button
  },

  date () {
    return {
    }
  }

}
</script>

<style scoped>
  .label {
    margin: 0px;
  }
</style>
