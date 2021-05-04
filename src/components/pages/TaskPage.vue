<template>
  <div>
    <Header/>
    <div class="task">
      <TaskList
        class="task-todo"
        :type="taskType.todo"
        @click="createModal"
      >
        TODO
      </TaskList>
      <TaskList
        class="task-wip"
        :type="taskType.wip"
        @click="createModal"
      >
        WIP
      </TaskList>
      <TaskList
        class="task-done"
        :type="taskType.done"
        @click="createModal"
      >
        DONE
      </TaskList>
      <div
        class="modal"
        :class="{ 'not-has-modal': notHasModal }"
      >
        <TaskDetailModal
          class="task-detail-modal"
          @close="close"
      >
      </TaskDetailModal>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/templates/Header.vue'
import TaskList from '@/components/templates/TaskList.vue'
import TaskDetailModal from '@/components/templates/TaskDetailModal'

export default {
  name: 'TaskPage',
  components: {
    Header,
    TaskList,
    TaskDetailModal
  },

  data () {
    return {
      notHasModal: true
    }
  },

  computed: {
    taskType () {
      return this.$store.state.taskType
    }
  },

  methods: {
    close () {
      this.notHasModal = true
    },
    createModal (id) {
      this.$store.dispatch('fetchTask', { taskId: id })
        .then((res) => {
          this.notHasModal = false
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
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
  .modal {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .not-has-modal {
    display: none;
  }
  .task-detail-modal {
    background-color: white;
    width: 400px;
    height: 300px;
    border: 3px solid #555555;
  }
</style>
