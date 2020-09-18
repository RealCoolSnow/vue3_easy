/*
 * @Description:
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 16:19:45
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-15 14:18:08
 */
import { createRouter, createWebHashHistory } from "vue-router"

const modules = [require.context("@/pages", false, /router\.js$/)]

function loadRouters() {
  let routerModules = modules
  const routers = []
  const requireAll = context => context.keys().map(context)
  if (process.env.NODE_ENV === "production") {
    routerModules = [require.context("@/pages/", true, /router\.js$/)]
  }
  for (const rcModule of routerModules) {
    requireAll(rcModule).forEach(({ default: item }) => {
      routers.push(...item)
    })
  }
  return routers
}

const routes = loadRouters()

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
