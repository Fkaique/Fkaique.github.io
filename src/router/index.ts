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
            {path: '', component: Home, meta: {title: "Fkaique | Software Engineer & Game Dev Indie"}},
            {path: '/dormitorio', component: Dormitorio, meta: {title: "Dormitório | Fkaique"}},
            {path: '/chat', component: Chat, meta: {title: "Chat | Fkaique"}}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const title = to.meta?.title as string || "Fkaique";
    document.title = title;
    next();
});

export default router