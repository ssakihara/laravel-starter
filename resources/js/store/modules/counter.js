const state = {
    count: 0,
}

const mutations = {
    increment(state) {
        console.log('mutations > increment is called')
        state.count++
    },
}
const actions = {
    increment(context) {
        console.log('action > increment is called')
        context.commit('increment')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
