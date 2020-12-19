<template>
  <div>
    <b-input-group v-if="isSearch" class="my-3">
      <b-form-input v-model="search" placeholder="Type here.." />
      <b-input-group-append>
        <b-button variant="info" @click="SearchSection">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-input-group v-else class="my-3">
      <b-form-input v-model="newSection" placeholder="Enter new section" />
      <b-input-group-append>
        <b-button variant="info" @click="AddNewSection">Add</b-button>
      </b-input-group-append>
    </b-input-group>
    <div class="text-right cursor-pointer">
      <span v-if="isSearch">
        <b-badge @click="isSearch = false" class="mr-1">
          <b-icon icon="plus"></b-icon>
        </b-badge>
        <b-badge @click="CloseSearch">
          <b-icon icon="x"></b-icon>
        </b-badge>
      </span>
      <b-badge v-else @click="isSearch = true">
        <b-icon icon="search"></b-icon>
      </b-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      isSearch: false,
      search: '',
      newSection: ''
    }
  },
  methods: {
    AddNewSection() {
      this.$store.dispatch('addNewSection', this.newSection)
      this.newSection = ''
    },
    SearchSection() {
      this.$store.dispatch('searchSection', this.search)
    },
    CloseSearch() {
      this.isSearch = false
      this.search = ''
      this.$store.dispatch('searchSection', this.search)
    }
  }
}
</script>
