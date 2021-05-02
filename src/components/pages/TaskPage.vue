<template>
  <div>
    <Header/>
    <TaskList/>
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
