<template>
    <v-container>
        <div class="headline">Welcome to {{ count }} visit.</div>
    </v-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: mapState('counter', ['count']),
    methods: {
        ...mapMutations('counter', ['increment']),
    },
    created() {
        this.increment()
    },
}
</script>
