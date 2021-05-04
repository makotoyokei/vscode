<template>
  <div class="task-list">
    <TaskListHeader
      class="task-list-header"
      @click="addTaskForm"
    >
    </TaskListHeader>
    <TaskCard/>
    <TaskForm
      v-show="isTaskForm"
      @click="cancelTask()"
    >
    </TaskForm>
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
  .task-list {
    min-width: 300px;
    display: inline-block;
    border: 1px solid #555555;
    min-height: 700px;
    border-radius: 10px;
  }
  .task-card {
    width: 300px;
  }
  .task-list-header {
    padding-top: 5px;
    border-bottom: 1px solid #555555;
  }

</style>
