// Headerと同じくtemplatesに置くべきではない
<template>
  <div class="task-list">
    <TaskListHeader
      class="task-list-header"
      @click="addTaskForm"
    >
      <slot></slot>
    </TaskListHeader>
    <TaskCard
      :type="type"
      @click="handleClick"
    >
    </TaskCard>
    <TaskForm
      v-show="isTaskForm"
      @click="cancelTask"
      :type="type"
    >
    </TaskForm>
  </div>
</template>

<script>
import TaskListHeader from '@/components/organisms/TaskListHeader.vue'
import TaskForm from '@/components/organisms/TaskForm.vue'
import TaskCard from '@/components/organisms/TaskCard.vue'

export default {
  name: 'TaskList',
  components: {
    TaskListHeader,
    TaskForm,
    TaskCard
  },

  props: {
    type: Number,
    isTaskForm: {
      default: false,
      type: Boolean
    }
  },

  methods: {
    cancelTask () {
      // cancel時に行いたい動作は親コンポーンエント側で定義するから、イベント名がcloseTaskFormなのはおかしい
      // イベントとしてはcancelTask
      this.$emit('closeTaskForm', this.type)
    },
    addTaskForm () {
      this.$emit('closeOtherTaskForm', this.type)
    },
    handleClick (id) {
      this.$emit('click', id)
    }
  }
}
</script>

<style scoped>
  .task-list {
    min-width: 400px;
    display: inline-block;
    border: 1px solid #555555;
    min-height: 700px;
    border-radius: 10px;
  }
  .task-card {
    width: 100%;
  }
  .task-list-header {
    padding-top: 5px;
    border-bottom: 1px solid #555555;
  }

</style>
