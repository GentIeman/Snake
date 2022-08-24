import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    name: "chat"
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/AppLogin.vue")
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/views/AppRegistration.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router