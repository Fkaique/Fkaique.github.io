import { createRouter, createWebHashHistory } from "vue-router"
import DefaultLayout from "../defaultLayout.vue"
import Home from "../pages/Home.vue"
import Dormitorio from "../pages/Dormitorio.vue"
import Galeria from "../pages/Galeria.vue"

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {path: '', component: Home},
            {path: '/domitorio', component: Dormitorio},
            {path: '/galeria', component: Galeria}
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router