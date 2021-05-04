<template>
  <div class="task-detail-form">
    <div>
      <p class="label">
        タスク名
      </p>
      <input
        class="text-area"
        type="text"
        :value="task.name"
        @input="taskName = $event.target.value"
      >
    </div>
    <div>
      <p class="label">
        説明
      </p>
      <textarea
        class="text-area"
        type="text"
        :value="task.description"
        @input="description = $event.target.value"
      >
      </textarea>
    </div>
    <div class="button-align">
      <Button
        class="button"
        @click="updateTask()"
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
    task () {
      return this.$store.state.task
    },
    taskType () {
      return this.task.taskType
    }
  },

  methods: {
    updateTask () {
      var taskName = this.taskName === '' ? this.task.name : this.taskName
      var description = this.description === '' ? this.task.description : this.description
      this.$store.dispatch('updateTask', {
        taskId: this.task.taskId, taskName: taskName, description: description, taskType: this.taskType
      })
        .then((res) => {
          this.$emit('completeUpdate')
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}
</script>

<style scoped>
  .task-detail-form {
    margin: 0px 20px;
  }
  .label {
    margin: 0px;
    text-align: left;
  }
  .text-area {
    width: 100%;
    margin-bottom: 10px;
  }
  .button {
    border-radius: 10px;
    padding: 0px 10px;
  }
  .button-align {
    text-align: right;
  }
</style>
