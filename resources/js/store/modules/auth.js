const state = {
    token: null,
    email: null,
}
const getters = {
    email(state) {
        return state.email
    },
    isLogin(state) {
        return state.token !== null
    },
}
const mutations = {
    login(state, user) {
        state.email = user.email
        state.token = user.token
    },
    logout(state) {
        state.email = null
        state.token = null
    },
}
const actions = {
    //
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
