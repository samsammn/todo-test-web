import Vue from 'vue'
import Vuex from 'vuex'
import api from './plugins/apiGenerator'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        sections: []
    },
    getters: {
        getSections(state) {
            return state.sections;
        }
    },
    mutations: {
        GET_SECTIONS(state, data) {
            state.sections = data;
        },
        ADD_NEW_SECTION(state, data) {
            state.sections.push(data);
        }
    },
    actions: {
        async getSections({ commit }) {
            const res = await api.get('/api/section')
            commit('GET_SECTIONS', res.data)
        },
        async addNewSection({ commit }, newSection) {
            const payload = { name: newSection }
            const res = await api.post('/api/section', payload)
            commit('ADD_NEW_SECTION', res.data)
        }
    }
})

export default store;