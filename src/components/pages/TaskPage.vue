<template>
  <div>
    <Header/>
    <div class="task">
      <TaskList class="task-todo">
        TODO
      </TaskList>
      <TaskList class="task-wip">
        WIP
      </TaskList>
      <TaskList class="task-done">
        DONE
      </TaskList>
    </div>
  </div>
</template>

<script>
import Header from '@/components/templates/Header.vue'
import TaskList from '@/components/templates/TaskList.vue'

export default {
  name: 'TaskPage',
  components: {
    Header,
    TaskList
  }
}
</script>

<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
  }
  .task-todo {
    margin-left: 10px;
  }
  .task-done {
    margin-right: 10px;
  }
</style>