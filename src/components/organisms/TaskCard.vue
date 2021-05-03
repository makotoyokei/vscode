<template>
  <div class="task-card">
    <ul>
      <li
        class="task-list-container"
        v-for="task in taskList[0]"
        :key="task.taskId"
      >
        <div>
          <router-link
            :to="{name: 'task-detail-modal', params:{id: task.taskId}}"
          >
            {{ task.name }}
          </router-link>
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

  methods: {
    clearTask (taskId) {
      this.$store.dispatch('clearTask', { taskId: taskId })
        .then((res) => {
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  },

  computed: {
    taskList () {
      return this.$store.state.task
    }
  },

  beforeCreate () {
    this.$store.dispatch('fetchTasks')
      .then((res) => {
      })
      .catch(err => this.throwReject(err))
  },
  throwReject (err) { return Promise.reject(err) }
}
</script>

<style scoped>
  ul {
    margin: 0px;
    padding: 0px;
  }
  li {
    list-style-type: none;
  }
  .task-card {
    display: inline-block;
  }
  .task-list-container {
    display: flex;
    justify-content: space-between;
    border: 1px solid #555555;
    border-radius: 10px;
    margin: 3px 0px;
    padding: 0px 5px;
  }
  .button {
    border: 0px;
    background-color: transparent;
    font-weight: bold;
    font-size: 14px;
  }
</style>
