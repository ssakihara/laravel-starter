<template>
    <v-container>
        <div class="headline">ログアウト</div>
    </v-container>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations('auth', ['logout']),
    },
    created() {
        this.logout()
        this.$router.push('/')
    },
}
</script>
