<template>
  <div>
    <Button
      class="button"
      @click="click"
    >
      ×
    </Button>
    <TaskDetailForm
      @completeUpdate="completeUpdate"
    />
  </div>
</template>

<script>
import TaskDetailForm from '@/components/organisms/TaskDetailForm.vue'

export default {
  name: 'TaskDetailModal',
  components: {
    TaskDetailForm
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
