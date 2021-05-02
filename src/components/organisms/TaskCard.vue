<template>
  <div class="task-list">
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

  created () {
    this.$store.dispatch('fetchTasks')
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
