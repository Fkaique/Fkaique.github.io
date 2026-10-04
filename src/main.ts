import '@unocss/reset/tailwind-v4.css'
import { ViteSSG } from 'vite-ssg'
import './padroes.css'
import './style.css'
import App from './App.vue'
import routerOptions from './router'

export const createApp = ViteSSG(
    App,
    routerOptions,
    () => {
        if (import.meta.env.SSR) return

        const icons = ['/eu1.png', '/eu2.png']
        const icon = document.getElementById('favicon') as HTMLLinkElement

        if (!icon) throw new Error('favicon não encontrado')

        let animando = false

        document.addEventListener('pointerdown', () => {
            animate()
        })

        function animate() {
            if (animando) return

            animando = true

            icon.href = icons[0] + '?v=' + Date.now()

            setTimeout(() => {
                icon.href = icons[1] + '?v=' + Date.now()

                setTimeout(() => {
                    icon.href = icons[0] + '?v=' + Date.now()
                    animando = false
                }, 200)

            }, 20)
        }
    }
)