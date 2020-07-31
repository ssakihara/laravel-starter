<template>
    <v-container>
        <div class="headline">ログイン</div>
        <v-list>
            <v-list-item v-for="(error, index) in errors" :key="index">
                <span class="red--text">{{ error }}</span>
            </v-list-item>
        </v-list>
        <v-form>
            <v-text-field v-model="email" counter="50" label="メールアドレス"></v-text-field>
            <v-text-field
                v-model="password"
                :append-icon="isAppend ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isAppend ? 'text' : 'password'"
                name="password"
                label="パスワード"
                counter="20"
                @click:append="isAppend = !isAppend"
            ></v-text-field>
            <v-btn @click="onLogin()">ログイン</v-btn>
        </v-form>
    </v-container>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            email: null,
            password: null,
            isAppend: false,
            errors: [],
        }
    },
    methods: {
        ...mapMutations('auth', ['login']),
        onLogin() {
            window.axios
                .post('/api/auth/login', {
                    email: this.email,
                    password: this.password,
                })
                .then((res) => {
                    this.login({ email: this.email, token: res.data.access_token })
                    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token
                    let redirect = this.$route.query.redirect
                    if (redirect == null) {
                        redirect = '/home'
                    }
                    this.$router.push(redirect)
                })
                .catch(() => {
                    this.errors = ['ログインに失敗しました']
                })
        },
    },
}
</script>
