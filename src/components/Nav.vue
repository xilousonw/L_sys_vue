<template>
    <div class="nav">
        <span @click="put_login">登录</span>
        <span @click="put_register">注册</span>
        <Login v-if="is_login" @close="close_login" @go="put_register" />
        <Register v-if="is_register" @close="close_register" @go="put_login" />
    </div>
</template>

<script>
    import Login from "./Login";
    import Register from "./Register";
    export default {
        name: "Nav",
        data() {
            return {
                is_login: false,
                is_register: false,
            }
        },
        methods: {
            put_login() {
                this.is_login = true;
                this.is_register = false;
            },
            put_register() {
                this.is_login = false;
                this.is_register = true;
            },
            close_login() {
                this.is_login = false;
            },
            close_register() {
                this.is_register = false;
            }
        },
        components: {
            Login,
            Register
        }
    }
</script>

<style scoped>

</style>