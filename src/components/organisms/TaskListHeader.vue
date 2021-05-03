<template>
  <div class="task-list-header">
    <div class="task-list-header-container">
      <div class="task-list-label">
        <slot></slot>
      </div>
      <div class="add-button">
        <Button
          class="button"
          @click="handleClick"
        >
          +
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskListHeader',
  components: {
    Button
  },

  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .task-list-header {
    display: block;
  }
  .task-list-header-container {
    display: flex;
    justify-content: space-between;
  }
  .button {
    border: 0px;
    background-color: transparent;
    font-weight: bold;
    font-size: 14px;
  }
</style>
