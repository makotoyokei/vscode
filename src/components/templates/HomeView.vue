<template>
  <div class="home-view">
    <div class="header">
      <Header/>
    </div>
    <div>
      <h1>ホームページ</h1>
      <TaskListHeader
        class="task-list-header"
        @click="addTaskForm"
      >
        TODO
      </TaskListHeader>
      <TaskForm
        @click="cancelTask()"
        v-show="isTaskForm"
      >

      </TaskForm>
      <TaskCard/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue'
import TaskListHeader from '@/components/molecules/TaskListHeader.vue'
import TaskForm from '@/components/molecules/TaskForm.vue'
import TaskCard from '@/components/molecules/TaskCard.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
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
