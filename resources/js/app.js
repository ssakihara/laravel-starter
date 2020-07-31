import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import router from '@/router'
import vuetify from '@/vuetify'
import store from '@/store'
import App from '@/App.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

if (store.getters['auth/isLogin']) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.auth.token
}

new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    components: { App },
    template: '<App />',
})
