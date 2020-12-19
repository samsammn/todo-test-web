<template>
  <div>
    <b-container class="my-5">
      <b-row>
        <b-col md="4" offset-md="4">
          <TodoForm />
          <TodoList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer
  }
</style>