import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f0dde06 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _1abd5d51 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _78df6deb = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _4e9e0321 = () => interopDefault(import('..\\pages\\register-success.vue' /* webpackChunkName: "pages/register-success" */))
const _cd878b6e = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _1de0735e = () => interopDefault(import('..\\pages\\dashboard\\transactions.vue' /* webpackChunkName: "pages/dashboard/transactions" */))
const _6c1615b2 = () => interopDefault(import('..\\pages\\transaction\\error.vue' /* webpackChunkName: "pages/transaction/error" */))
const _072cea4e = () => interopDefault(import('..\\pages\\transaction\\finish.vue' /* webpackChunkName: "pages/transaction/finish" */))
const _37bf4a9c = () => interopDefault(import('..\\pages\\transaction\\unfinish.vue' /* webpackChunkName: "pages/transaction/unfinish" */))
const _7e667d72 = () => interopDefault(import('..\\pages\\dashboard\\projects\\create.vue' /* webpackChunkName: "pages/dashboard/projects/create" */))
const _790a05ce = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\index.vue' /* webpackChunkName: "pages/dashboard/projects/_id/index" */))
const _2b132bbe = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\edit.vue' /* webpackChunkName: "pages/dashboard/projects/_id/edit" */))
const _07565468 = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _5115ba3a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1f0dde06,
    name: "dashboard"
  }, {
    path: "/login",
    component: _1abd5d51,
    name: "login"
  }, {
    path: "/register",
    component: _78df6deb,
    name: "register"
  }, {
    path: "/register-success",
    component: _4e9e0321,
    name: "register-success"
  }, {
    path: "/upload",
    component: _cd878b6e,
    name: "upload"
  }, {
    path: "/dashboard/transactions",
    component: _1de0735e,
    name: "dashboard-transactions"
  }, {
    path: "/transaction/error",
    component: _6c1615b2,
    name: "transaction-error"
  }, {
    path: "/transaction/finish",
    component: _072cea4e,
    name: "transaction-finish"
  }, {
    path: "/transaction/unfinish",
    component: _37bf4a9c,
    name: "transaction-unfinish"
  }, {
    path: "/dashboard/projects/create",
    component: _7e667d72,
    name: "dashboard-projects-create"
  }, {
    path: "/dashboard/projects/:id",
    component: _790a05ce,
    name: "dashboard-projects-id"
  }, {
    path: "/dashboard/projects/:id?/edit",
    component: _2b132bbe,
    name: "dashboard-projects-id-edit"
  }, {
    path: "/projects/:id?",
    component: _07565468,
    name: "projects-id"
  }, {
    path: "/",
    component: _5115ba3a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
