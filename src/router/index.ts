import DefaultLayout from "../defaultLayout.vue"
import Home from "../pages/Home.vue"
import Dormitorio from "../pages/Dormitorio.vue"
import Chat from "../pages/Chat.vue"

const router = {
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                { path: '', component: Home },
                { path: '/domitorio', component: Dormitorio },
                { path: '/chat', component: Chat }
            ]
        }
    ]
}

export default router