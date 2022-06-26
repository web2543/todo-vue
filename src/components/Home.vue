<script>
import { ref, reactive } from 'vue'
import axios from 'axios'
import Todo from "./TodoList.vue"
import { useUserStore } from '../stores/user'
export default {
    props: {},
    components: {
        Todo
    },
    setup() {
        const User = useUserStore()
        /*let todos = ref(null)
        let isLoad = ref(false)
        let err = ref(null)*/
        let todostring = ref("")
        function loading() {
            User.gettodo()
            /*isLoad.value = false
            axios.get('http://localhost:1112/todos', { withCredentials: true }).then(
                function (response) {
                    todos.value = response.data
                    isLoad.value = true
                    console.log(todos)
                }
            ).catch(
                function (error) {
                    console.log(error)
                    isLoad.value = false
                    err.value = error
                }
            )
            console.log("running")*/
        }
        function create() {
            User.createtodo(todostring.value)
            todostring.value = ''
            /*axios.post('http://localhost:1112/todo', {
                text: todostring.value
            }, { withCredentials: true }).then(function(response){
                loading()
                todostring.value=''
            }).catch(
                function (error) {
                    console.log(error)
                    err.value = error
                }
            )*/

        }
        User.gettodo()
        //return { loading, todos, isLoad, err, create, todostring ,User}
        return { loading, create, todostring, User }
    },
}
</script>
<template>
    <div>
        <h3>Todo</h3>
        <div v-if="User.isLoad">
            <Todo v-for="todo in User.todos" :text="todo.text" :check="todo.check" :ID="todo.ID" />
        </div>
        <div>
            <p>
                <input type="text" v-model="todostring" />
                <button @click="create">Update</button>
            </p>
            <button @click="User.gettodo">Test</button>
        </div>
    </div>
</template>