import { createRouter, createWebHistory } from 'vue-router'

import SuspenseExample from '@/pages/SuspenseExample.vue'
import TeleportExample from '@/pages/TeleportExample.vue'
import MultiVmodel from '@/pages/MultiVmodel.vue'

const routes = [
    {
        path: '/suspense-example',
        component: SuspenseExample
    },
    {
        path: '/teleport-example',
        component: TeleportExample
    },
    {
        path: '/v-model-example',
        component: MultiVmodel

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
