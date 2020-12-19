<template>
  <div>
    <input v-model="newSection" type="text" placeholder="Add New Section">
    <button @click="AddNewSection">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newSection: ''
    }
  },
  methods: {
    AddNewSection() {
      this.$store.dispatch('addNewSection', this.newSection)
    }
  }
}
</script>
