import { createRouter, createWebHistory } from "vue-router"
import DefaultLayout from "../defaultLayout.vue"
import Home from "../pages/Home.vue"
import Dormitorio from "../pages/Dormitorio.vue"
import Chat from "../pages/Chat.vue"

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {path: '', component: Home},
            {path: '/domitorio', component: Dormitorio},
            {path: '/chat', component: Chat}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router