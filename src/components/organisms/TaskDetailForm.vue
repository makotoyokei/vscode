<template>
  <div>
    <div>
      <p class="label">
        タスク名
      </p>
      <input
        type="text"
        :value="task.name"
        @input="taskName = $event.target.value"
      >
    </div>
    <div>
      <p class="label">
        説明
      </p>
      <input
        type="text"
        :value="task.description"
        @input="description = $event.target.value"
      >
    </div>
    <div>
      <Button
        class="button"
        @click="updateTask($event.target.value)"
      >
        更新
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskDetailForm',
  components: {
    Button
  },

  data () {
    return {
      taskName: '',
      description: ''
    }
  },

  computed: {
    taskId () {
      return Number(this.$route.params['id'])
    },
    task () {
      return this.$store.state.task[0]
    },
    taskType () {
      return this.task.taskType
    }
    // taskCopy () {
    //   return Object.assign({}, this.task)
    // }
    // taskName () {
    //   return this.task.name
    // },
    // description () {
    //   return this.task.description
    // }
  },

  methods: {
    updateTask () {
      var taskName = this.taskName === '' ? this.task.name : this.taskName
      var description = this.description === '' ? this.task.description : this.description
      this.$store.dispatch('updateTask', {
        taskId: this.task.taskId, taskName: taskName, description: description, taskType: this.taskType
      })
        .then((res) => {
          this.$router.push({ path: '/tasks' })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  },

  created () {
    this.$store.dispatch('fetchTask', { taskId: this.taskId })
      .then((res) => {
      })
      .catch(err => this.throwReject(err))
  },
  throwReject (err) { return Promise.reject(err) }

}
</script>

<style scoped>
  .label {
    margin: 0px;
  }
</style>
