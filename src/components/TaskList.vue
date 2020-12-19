<template>
  <div>
    <b-list-group class="my-1">
      <b-list-group-item
        v-for="(section, index) in sections" :key="index"
        class="d-flex justify-content-between align-items-center">
          <span class="cursor-pointer" @click="$router.push('/section')">
            {{ section.name }}
          </span>
          <div>
            <b-badge pill variant="info" class="cursor-pointer mr-2" @click="showUpdateTaskDialog(section)">
                <b-icon icon="pencil"></b-icon>
            </b-badge>
            <b-badge pill variant="danger" class="cursor-pointer" @click="deleteTask(section.id)">
                <b-icon icon="trash"></b-icon>
            </b-badge>
          </div>
      </b-list-group-item>
    </b-list-group>
    <b-modal id="updateTask" hide-header hide-footer size="sm" button-size="sm">
      <div class="my-1">
        <b-form-group label="Task" description="enter for update section">
          <b-form-input v-model="nameTask" placeholder="Enter Update Task" @keyup="updateTask" />
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      nameTask: '',
      currentTask: {
        id: '',
        name: ''
      }
    }
  },
  computed: {
    sections() {
      return this.$store.getters.getTasks
    }
  },
  mounted() {
    this.$store.dispatch('getTasks')
  },
  methods: {
    showUpdateTaskDialog(section) {
      this.nameTask = section.name
      this.currentTask = section
      this.$bvModal.show('updateTask')
    },
    deleteTask(id) {
      this.$store.dispatch('deleteTask', id)
    },
    updateTask(e) {
      if (e.keyCode === 13) {
        this.currentTask = { ...this.currentTask, name: this.nameTask }
        this.$store.dispatch('updateTask', this.currentTask)
        this.$bvModal.hide('updateTask')
      }
    }
  }
}
</script>
