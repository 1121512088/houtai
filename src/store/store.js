import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'

let store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store

