// 報告用PR
<template>
  <div>
    <Header/>
    <div class="task">
      <TaskList
        class="task-todo"
        :type="taskType.todo"
        :isTaskForm="isTaskForm[taskType.todo-1]"
        @click="createModal"
        @closeTaskForm="closeTaskForm"
        @closeOtherTaskForm="closeOtherTaskForm"
      >
        TODO
      </TaskList>
      <TaskList
        class="task-wip"
        :type="taskType.wip"
        :isTaskForm="isTaskForm[taskType.wip-1]"
        @click="createModal"
        @closeTaskForm="closeTaskForm"
        @closeOtherTaskForm="closeOtherTaskForm"
      >
        WIP
      </TaskList>
      <TaskList
        class="task-done"
        :type="taskType.done"
        :isTaskForm="isTaskForm[taskType.done-1]"
        @click="createModal"
        @closeTaskForm="closeTaskForm"
        @closeOtherTaskForm="closeOtherTaskForm"
      >
        DONE
      </TaskList>
      <div
        class="modal"
        :class="{ 'not-has-modal': notHasModal }"
      >
        <TaskDetailModal
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
      notHasModal: true,
      isTaskForm: [false, false, false]
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
    closeTaskForm (taskType) {
      this.isTaskForm.splice(taskType - 1, 1, false)
    },
    closeOtherTaskForm (taskType) {
      this.isTaskForm.splice(taskType - 1, 1, true)
      this.isTaskForm.splice((taskType - 2) % 3, 1, false)
      this.isTaskForm.splice((taskType - 3) % 3, 1, false)
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
    margin-left: 50px;
  }
  .task-done {
    margin-right: 50px;
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
</style>
