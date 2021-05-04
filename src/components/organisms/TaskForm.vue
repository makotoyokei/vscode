<template>
  <div class="task-form">
    <div>
      <textarea
        rows="2"
        placeholder="タスク"
        v-model="task">
      </textarea>
    </div>
    <div class="button-container">
      <Button
        class="add-button"
        @click="createTask"
        :disabled="isTask"
      >
        追加
      </Button>
      <Button
        class="cancel-button"
        @click="cancelTask"
      >
        キャンセル
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'TaskForm',
  components: {
    Button
  },

  data () {
    return {
      task: '',
      taskList: this.$store.state.task
    }
  },

  computed: {
    isTask () {
      return !this.task
    },
    lastTaskId () {
      return this.taskList[0].length === 0
        ? 0
        : this.taskList[0][this.taskList[0].length - 1].taskId
    }
  },

  methods: {
    cancelTask () {
      this.$emit('click')
    },
    createTask () {
      return this.$store.dispatch('createTask', { task: this.task, taskId: this.lastTaskId })
        .then(() => {
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}
</script>

<style scoped>
  .task-form {
    margin: 10px;
  }
  .button-container {
    display: flex;
  }
  .add-button {
    width: 50%;
    border-radius: 5px;
    margin-right: 5px
  }
  .cancel-button {
    width: 50%;
    border-radius: 5px;
    margin-left: 5px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
  }
</style>
