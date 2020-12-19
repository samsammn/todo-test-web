import Vue from 'vue'
import Vuex from 'vuex'
import api from './plugins/apiGenerator'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        sections: [],
        tasks: []
    },
    getters: {
        getSections: (state) => {
            return state.sections
        },
        getTasks: (state) => {
            return state.sections
        }
    },
    mutations: {
        GET_SECTIONS(state, data) {
            state.sections = data
        },
        SEARCH_SECTION(state, search) {
            state.sections = state.sections.filter(o => o.name.toLowerCase().includes(search.toLowerCase()))
        },
        ADD_NEW_SECTION(state, data) {
            state.sections.push(data)
        },
        UPDATE_SECTION(state, data) {
            const sections = state.sections.map((item) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        ...data
                    }
                }

                return { ...item }
            })
            state.sections = sections
        },
        DELETE_SECTION(state, sectionId) {
            const sections = state.sections.filter(o => o.id != sectionId)
            state.sections = sections
        },
        GET_TASKS(state, data) {
            state.tasks = data
        },
        SEARCH_TASK(state, search) {
            state.tasks = state.tasks.filter(o => o.name.toLowerCase().includes(search.toLowerCase()))
        },
        ADD_NEW_TASK(state, data) {
            state.tasks.push(data)
        },
        UPDATE_TASK(state, data) {
            const tasks = state.tasks.map((item) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        ...data
                    }
                }

                return { ...item }
            })
            state.tasks = tasks
        },
        DELETE_TASK(state, sectionId) {
            const tasks = state.tasks.filter(o => o.id != sectionId)
            state.tasks = tasks
        }
    },
    actions: {
        async getSections({ commit }) {
            const res = await api.get('/api/section')
            commit('GET_SECTIONS', res.data)
        },
        async searchSection({ commit }, search) {
            if (search == '') {
                const res = await api.get('/api/section')
                commit('GET_SECTIONS', res.data)
            } else {
                commit('SEARCH_SECTION', search)
            }
        },
        async addNewSection({ commit }, newSection) {
            const payload = { name: newSection }
            const res = await api.post('/api/section', payload)
            commit('ADD_NEW_SECTION', res.data)
        },
        async updateSection({ commit }, newSection) {
            const payload = { ...newSection }
            const res = await api.put(`/api/section/${newSection.id}`, payload)
            commit('UPDATE_SECTION', res.data)
        },
        async deleteSection({ commit }, sectionId) {
            await api.delete(`/api/section/${sectionId}`)
            commit('DELETE_SECTION', sectionId)
        },
        async getTasks({ commit }) {
            const res = await api.get('/api/task')
            commit('GET_TASKS', res.data)
        },
        async searchTask({ commit }, search) {
            if (search == '') {
                const res = await api.get('/api/task')
                commit('GET_TASKS', res.data)
            } else {
                commit('SEARCH_TASK', search)
            }
        },
        async addNewTask({ commit }, newTask) {
            const payload = { name: newTask }
            const res = await api.post('/api/task', payload)
            commit('ADD_NEW_TASK', res.data)
        },
        async updateTask({ commit }, newTask) {
            const payload = { ...newTask }
            const res = await api.put(`/api/task/${newTask.id}`, payload)
            commit('UPDATE_TASK', res.data)
        },
        async deleteTask({ commit }, taskId) {
            await api.delete(`/api/task/${taskId}`)
            commit('DELETE_TASK', taskId)
        },
    }
})

export default store