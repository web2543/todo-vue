import { createRouter, createWebHistory} from "vue-router"
import HomeView from '../components/Home.vue'
import LoginView from '../components/Login.vue'
import SignupView from "../components/Signup.vue"

const routes =[
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router