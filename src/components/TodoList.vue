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
            <b-badge pill variant="info" class="cursor-pointer mr-2" @click="showUpdateSectionDialog(section)">
                <b-icon icon="pencil"></b-icon>
            </b-badge>
            <b-badge pill variant="danger" class="cursor-pointer" @click="deleteSection(section.id)">
                <b-icon icon="trash"></b-icon>
            </b-badge>
          </div>
      </b-list-group-item>
    </b-list-group>
    <b-modal id="updateSection" hide-header hide-footer size="sm" button-size="sm">
      <div class="my-1">
        <b-form-group label="Section" description="enter for update section">
          <b-form-input v-model="nameSection" placeholder="Enter Update Section" @keyup="updateSection" />
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
      nameSection: '',
      currentSection: {
        id: '',
        name: ''
      }
    }
  },
  computed: {
    sections() {
      return this.$store.getters.getSections
    }
  },
  mounted() {
    this.$store.dispatch('getSections')
  },
  methods: {
    showUpdateSectionDialog(section) {
      this.nameSection = section.name
      this.currentSection = section
      this.$bvModal.show('updateSection')
    },
    deleteSection(id) {
      this.$store.dispatch('deleteSection', id)
    },
    updateSection(e) {
      if (e.keyCode === 13) {
        this.currentSection = { ...this.currentSection, name: this.nameSection }
        this.$store.dispatch('updateSection', this.currentSection)
        this.$bvModal.hide('updateSection')
      }
    }
  }
}
</script>
