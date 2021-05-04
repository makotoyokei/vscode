<template>
  <div class="task-detail-modal">
    <div class="button-align">
      <Button
        class="button"
        @click="click"
      >
        ×
      </Button>
    </div>
    <TaskDetailForm
      @completeUpdate="completeUpdate"
    />
  </div>
</template>

<script>
import TaskDetailForm from '@/components/organisms/TaskDetailForm.vue'
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskDetailModal',
  components: {
    TaskDetailForm,
    Button
  },

  props: {
    taskId: Number
  },

  methods: {
    completeUpdate () {
      this.$emit('close')
    },
    click () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .button {
    border: 0px;
    background-color: transparent;
    font-weight: bold;
    font-size: 14px;
  }
  .button-align {
    text-align: right;
    margin: 5px 5px 0px 0px;
  }
  .task-detail-modal {
    background-color: white;
    width: 400px;
    height: auto;
    border: 3px solid #555555;
    border-radius: 20px;
    padding-bottom: 20px;
  }
</style>
