import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import light from '@/vuetify/light'

const options = {
    theme: {
        themes: { light },
    },
    icons: {
        iconfont: 'fa',
    },
}

export default new Vuetify(options)
