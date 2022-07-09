import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24eb1a03 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _8ba48518 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _e1ba1230 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _547b3f1e = () => interopDefault(import('..\\pages\\register-success.vue' /* webpackChunkName: "pages/register-success" */))
const _305042f4 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _d118f898 = () => interopDefault(import('..\\pages\\dashboard\\transactions.vue' /* webpackChunkName: "pages/dashboard/transactions" */))
const _6f94466f = () => interopDefault(import('..\\pages\\transaction\\error.vue' /* webpackChunkName: "pages/transaction/error" */))
const _68b171bc = () => interopDefault(import('..\\pages\\transaction\\finish.vue' /* webpackChunkName: "pages/transaction/finish" */))
const _5e0a14d5 = () => interopDefault(import('..\\pages\\transaction\\unfinish.vue' /* webpackChunkName: "pages/transaction/unfinish" */))
const _afd25d56 = () => interopDefault(import('..\\pages\\dashboard\\projects\\create.vue' /* webpackChunkName: "pages/dashboard/projects/create" */))
const _2e509f9e = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\index.vue' /* webpackChunkName: "pages/dashboard/projects/_id/index" */))
const _ecf5ae0a = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\edit.vue' /* webpackChunkName: "pages/dashboard/projects/_id/edit" */))
const _25c1e18b = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _1ef3cb46 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _24eb1a03,
    name: "dashboard"
  }, {
    path: "/login",
    component: _8ba48518,
    name: "login"
  }, {
    path: "/register",
    component: _e1ba1230,
    name: "register"
  }, {
    path: "/register-success",
    component: _547b3f1e,
    name: "register-success"
  }, {
    path: "/upload",
    component: _305042f4,
    name: "upload"
  }, {
    path: "/dashboard/transactions",
    component: _d118f898,
    name: "dashboard-transactions"
  }, {
    path: "/transaction/error",
    component: _6f94466f,
    name: "transaction-error"
  }, {
    path: "/transaction/finish",
    component: _68b171bc,
    name: "transaction-finish"
  }, {
    path: "/transaction/unfinish",
    component: _5e0a14d5,
    name: "transaction-unfinish"
  }, {
    path: "/dashboard/projects/create",
    component: _afd25d56,
    name: "dashboard-projects-create"
  }, {
    path: "/dashboard/projects/:id",
    component: _2e509f9e,
    name: "dashboard-projects-id"
  }, {
    path: "/dashboard/projects/:id?/edit",
    component: _ecf5ae0a,
    name: "dashboard-projects-id-edit"
  }, {
    path: "/projects/:id?",
    component: _25c1e18b,
    name: "projects-id"
  }, {
    path: "/",
    component: _1ef3cb46,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
