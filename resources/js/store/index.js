import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import counter from '@/store/modules/counter'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        auth,
    },
    plugins: [createPersistedState()],
})
