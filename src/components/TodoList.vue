<template>
  <div>
    <ul>
      <li v-for="(section, index) in sections" :key="index">{{ section.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  computed: {
    sections() {
      return this.$store.getters.getSections
    }
  },
  mounted() {
    this.$store.dispatch('getSections')
  }
}
</script>
