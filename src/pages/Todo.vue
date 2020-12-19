<template>
	<b-container class="my-5">
		<b-row>
			<b-col md="4" offset-md="4">
				<TodoForm />
				<TodoList />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import TodoForm from '../components/TodoForm.vue'

export default {
	name: 'Todo',
  components: {
    TodoList,
    TodoForm
  }
}
</script>
