<script>
import { ref, reactive } from "vue"
import axios from 'axios'
export default {
    setup() {

        const credential = reactive({ username: "", password: "" })
        const err = ref(null)
        const state = reactive({
            Complete: false,
            Press: false
        })

        function signup() {
            state.Complete = false
            state.Press = true
            axios.post('http://localhost:1112/signup', {
                /*username:"win1",
                password:"w0n"*/
                username: credential.username,
                password: credential.password
            }, {
                withCredentials: true
            }).then(function (response) {
                console.log(response.data)
                state.Complete = true
            }).catch(function (error) {
                err.value = error
                console.log(error)
            })
            console.log("running")
        }
        return {
            signup, credential, state, err
        }
    }
}

</script>
<template>
    <h1>Signup</h1>
    <p>
        <label id="username">username </label>
        <input type="text" v-model="credential.username" />
    </p>
    <p>
        <label id="password">password </label>
        <input type="password" v-model="credential.password" />
    </p>
    <p v-if="state.Complete&&state.Press">Complete</p>
    <p v-else-if="state.Press">Fail</p>
    <button @click="signup">Signup</button>
</template>