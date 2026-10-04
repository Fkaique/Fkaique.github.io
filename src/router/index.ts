import DefaultLayout from "../defaultLayout.vue"
import Home from "../pages/Home.vue"
import Chat from "../pages/Chat.vue"
import Dormitorio from "../pages/Dormitorio.vue"

const router = {
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                { path: '', component: Home },
                { path: '/dormitorio', component: Dormitorio },
                { path: '/chat', component: Chat }
            ]
        }
    ]
}

export default router