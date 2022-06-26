import { defineStore,acceptHMRUpdate } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('User', {
    state: () => ({
        isLogin: false,
        isLoad: false,
        todos: [],
        err: null
    }),
    actions: {
        login(username, password) {
            axios.post('http://localhost:1112/login', {
                username: username,
                password: password
            }, {
                withCredentials: true
            }).then((response) => {
                this.isLogin = true
            }).catch((error) => {
                console.log(error)
                this.err = error
            })
        },
        gettodo() {
            this.isLoad = false
            axios.get('http://localhost:1112/todos', { withCredentials: true })
                .then(
                    (response) => {
                        this.todos = response.data
                        this.isLoad = true
                        console.log(response.data)
                        console.log(this.todos)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                        this.isLoad = false
                        this.err = error
                    }
                )
        },
        createtodo(todostring) {
            axios.post('http://localhost:1112/todo', {
                text: todostring
            }, { withCredentials: true }).then((response) => {
                this.todos = response.data
            }).catch(
                (error) => {
                    console.log(error)
                    this.err = error
                }
            )
        },
        deletetodo(id){
            axios.delete('http://localhost:1112/todo/'+id, { withCredentials: true })
            .then((response)=>{
            console.log('log:'+id)
            this.todos = response.data
            })
            .catch((error)=> {
                err.value = error
            })
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
  }