<template>
  <div>
    <TaskListHeader
      class="task-list-header"
      @click="addTaskForm"
    >
      TODO
    </TaskListHeader>
    <TaskForm
      v-show="isTaskForm"
      @click="cancelTask()"
    >
    </TaskForm>
    <TaskCard/>
  </div>
</template>

<script>
import TaskListHeader from '@/components/organisms/TaskListHeader.vue'
import TaskForm from '@/components/organisms/TaskForm.vue'
import TaskCard from '@/components/organisms/TaskCard.vue'

export default {
  name: 'TaskList',
  components: {
    TaskListHeader,
    TaskForm,
    TaskCard
  },

  data () {
    return {
      isTaskForm: false
    }
  },

  methods: {
    cancelTask () {
      this.isTaskForm = false
    },
    addTaskForm () {
      this.isTaskForm = true
    }
  }
}
</script>

<style scoped>
  .task-list-header {
    width: 200px;
    line-height: normal;
  }
</style>
