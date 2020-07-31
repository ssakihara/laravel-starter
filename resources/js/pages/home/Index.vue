<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="headline">ログイン中のユーザ情報</div>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">要素</th>
                                <th class="text-left">値</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{{ user.id }}</td>
                            </tr>
                            <tr>
                                <td>名前</td>
                                <td>{{ user.name }}</td>
                            </tr>
                            <tr>
                                <td>メールアドレス</td>
                                <td>{{ user.email }}</td>
                            </tr>
                            <tr>
                                <td>作成日</td>
                                <td>{{ user.created_at }}</td>
                            </tr>
                            <tr>
                                <td>更新日</td>
                                <td>{{ user.updated_at }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            user: {
                id: null,
                name: null,
                email: null,
            },
        }
    },
    created() {
        window.axios.post('/api/auth/me').then((res) => {
            this.user = res.data
        })
    },
}
</script>
