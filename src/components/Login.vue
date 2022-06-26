<script>
import { reactive } from "vue"
import axios from 'axios'
import { useUserStore } from "../stores/user"
export default {
    setup() {
        const user= useUserStore()
        const credential = reactive({ username: "", password: "" })

        function login() {
            /*axios.post('http://localhost:1112/login', {
                /*username:"win1",
                password:"w0n"
                username: credential.username,
                password: credential.password
            }, {
                withCredentials: true
            }).then(function (response) {
                console.log(response.data)
            }).catch(function (error) {
                console.log(error)
            })
            console.log("running")*/
            user.login(credential.username,credential.password)
        }
        return {
            login, credential,user
        }
    }
}

</script>
<template>
<h1>Login</h1>
    <p>
        <label id="username">username </label>
        <input type="text" v-model="credential.username" />
    </p>
    <p>
        <label id="password">password </label>
        <input type="password" v-model="credential.password" />
    </p>


    <button @click="login">Login</button>
</template>