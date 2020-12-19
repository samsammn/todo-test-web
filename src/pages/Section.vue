<template>
	<b-container class="my-5">
		<b-row>
			<b-col md="4" offset-md="4">
				<h2 class="diplay-1">Section 1</h2>
				<TaskForm />
				<TaskList />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import TaskForm from '../components/TaskForm.vue'

export default {
	name: 'Section',
  components: {
    TaskList,
    TaskForm
  }
}
</script>
