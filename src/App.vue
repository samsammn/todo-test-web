<template>
  <div id="app">
    <TodoForm />
    <TodoList />
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