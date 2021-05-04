<template>
  <div>
    <Header/>
    <div class="task">
      <TaskList
        class="task-todo"
        :type="1"
      >
        TODO
      </TaskList>
      <TaskList
        class="task-wip"
        :type="2"
      >
        WIP
      </TaskList>
      <TaskList
        class="task-done"
        :type="3"
      >
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
