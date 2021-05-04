<template>
  <div class="task-card">
    <ul>
      <li
        class="task-list-container"
        v-for="task in taskList[0]"
        :key="task.taskId"
        v-show="isTaskType(task.taskType)"
      >
        <div
          @click="handleClick(task.taskId)"
        >
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

  props: {
    type: Number
  },

  methods: {
    handleClick (id) {
      this.$emit('click', id)
    },
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
      return this.$store.state.tasks
    },
    isTaskType () {
      return function (type) {
        return this.type === type
      }
    }
  }
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
    padding: 0px 5px;
    margin: 5px 10px;
  }
  .button {
    border: 0px;
    background-color: transparent;
    font-weight: bold;
    font-size: 14px;
  }
</style>
