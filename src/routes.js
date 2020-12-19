import VueRouter from 'vue-router'

// import page-page
import Todo from './pages/Todo.vue';
import Section from './pages/Section.vue';
import Task from './pages/Task.vue';

const routes = [{
    path: '/', component: Todo
}, {
    path: '/section/:id', component: Section
}, {
    path: '/task', component: Task
}]

export default new VueRouter({
    routes,
    mode: 'history'
})