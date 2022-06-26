<script>
import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

export default {
    props: {
        text: String,
        check: Boolean,
        ID: Number
    },
     setup() {
        const err = ref('')
        const user =useUserStore()
        function onclose() {
            /*axios.delete('http://localhost:1112/todo/'+props.ID, { withCredentials: true })
                .then((response)=>{
                console.log('log:'+props.ID)
                context.emit('reload')
                })
                .catch((error)=> {
                    err.value = error
                })*/
        }
        return { err, onclose,user }
    }
}
</script>
<template>
    <p>
        <input type="checkbox" :value="ID" v-if="check" checked />
        <input type="checkbox" :value="ID" v-else />
        {{ text }}
        <button @click="user.deletetodo(ID)">X</button>
    </p>
</template>