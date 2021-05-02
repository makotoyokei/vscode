<template>
  <div class="task-list">
    <ul>
      <li
        class="task-list-container"
        v-for="task in taskList[0]"
        :key="task.taskId"
      >
        <div>
          {{ task.name }}
        </div>
        <Button
          class="button"
          @click="clearTask(task.taskId)"
        >
          ×
        </Button>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskCard',
  components: {
    Button
  },

  data () {
    return {
      taskList: this.$store.state.task
    }
  },

  methods: {
    clearTask (taskId) {
      this.$store.dispatch('clearTask', { taskId: taskId })
        .then((res) => {
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  },

  created () {
    this.$store.dispatch('fetchTask')
      .then((res) => {
      })
      .catch(err => this.throwReject(err))
  },
  throwReject (err) { return Promise.reject(err) }
}
</script>

<style scoped>
  li {
    list-style-type: none;
  }
  .task-list {
    display: inline-block;
  }
  .task-list-container {
    display: flex;
    justify-content: space-between;
  }
  .button {
    border: 0px;
    background-color: white;
    font-weight: bold;
    font-size: 14px;
  }
</style>
