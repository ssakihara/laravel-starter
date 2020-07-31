<template>
    <v-app>
        <v-navigation-drawer app clipped v-model="isDisplay">
            <v-list>
                <v-list-group
                    v-for="(sidebar, i) in sidebars"
                    :key="i"
                    :prepend-icon="sidebar.icon"
                    no-action
                    :value="sidebar.isValue"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="sidebar.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(child, j) in sidebar.children"
                        :key="j"
                        :to="child.to"
                        active-class="base white--text"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="base" app dark clipped-left>
            <v-app-bar-nav-icon @click.stop="isDisplay = !isDisplay"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <router-link to="/" class="toolbar-title">{{ title }}</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-menu offset-y v-if="isLogin">
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" style="text-transform: none;"> {{ email }} </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(header, i) in headers" :key="i" :to="header.to">
                        <v-list-item-title>{{ header.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text @click="toLogin" v-else>ログイン</v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer color="base" padless app dark>
            <v-row justify="center" no-gutters>
                <v-btn v-for="(footer, i) in footers" :key="i" color="white" text rounded class="my-2" :to="footer.to">
                    {{ footer.title }}
                </v-btn>
                <v-col class="base py-4 text-center white--text" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Company</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isDisplay: null,
            footers: [],
            sidebars: [
                {
                    title: 'Main',
                    icon: 'fas fa-home',
                    isValue: true,
                    children: [
                        { title: 'Home', to: '/home' },
                        { title: 'Login', to: '/auth/login' },
                        { title: 'Logout', to: '/auth/logout' },
                    ],
                },
            ],
            headers: [
                {
                    title: 'ログアウト',
                    to: '/auth/logout',
                },
            ],
        }
    },
    computed: {
        ...mapGetters('auth', ['isLogin', 'email']),
        title() {
            return window.config.app_name
        },
    },
    methods: {
        toLogin() {
            this.$router.push('/auth/login')
        },
    },
}
</script>
