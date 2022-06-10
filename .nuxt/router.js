import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d77f8e54 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _f910b6fe = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _837cce8a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _785f441e = () => interopDefault(import('..\\pages\\register-success.vue' /* webpackChunkName: "pages/register-success" */))
const _47cad919 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _3058a181 = () => interopDefault(import('..\\pages\\dashboard\\transactions.vue' /* webpackChunkName: "pages/dashboard/transactions" */))
const _5e1cfc82 = () => interopDefault(import('..\\pages\\transaction\\error.vue' /* webpackChunkName: "pages/transaction/error" */))
const _4b3f7e09 = () => interopDefault(import('..\\pages\\transaction\\finish.vue' /* webpackChunkName: "pages/transaction/finish" */))
const _55737c3c = () => interopDefault(import('..\\pages\\transaction\\unfinish.vue' /* webpackChunkName: "pages/transaction/unfinish" */))
const _2b237ebc = () => interopDefault(import('..\\pages\\dashboard\\projects\\create.vue' /* webpackChunkName: "pages/dashboard/projects/create" */))
const _481cb0fe = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\index.vue' /* webpackChunkName: "pages/dashboard/projects/_id/index" */))
const _73334ae4 = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\edit.vue' /* webpackChunkName: "pages/dashboard/projects/_id/edit" */))
const _44a328d0 = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _8c5ffd2c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d77f8e54,
    name: "dashboard"
  }, {
    path: "/login",
    component: _f910b6fe,
    name: "login"
  }, {
    path: "/register",
    component: _837cce8a,
    name: "register"
  }, {
    path: "/register-success",
    component: _785f441e,
    name: "register-success"
  }, {
    path: "/upload",
    component: _47cad919,
    name: "upload"
  }, {
    path: "/dashboard/transactions",
    component: _3058a181,
    name: "dashboard-transactions"
  }, {
    path: "/transaction/error",
    component: _5e1cfc82,
    name: "transaction-error"
  }, {
    path: "/transaction/finish",
    component: _4b3f7e09,
    name: "transaction-finish"
  }, {
    path: "/transaction/unfinish",
    component: _55737c3c,
    name: "transaction-unfinish"
  }, {
    path: "/dashboard/projects/create",
    component: _2b237ebc,
    name: "dashboard-projects-create"
  }, {
    path: "/dashboard/projects/:id",
    component: _481cb0fe,
    name: "dashboard-projects-id"
  }, {
    path: "/dashboard/projects/:id?/edit",
    component: _73334ae4,
    name: "dashboard-projects-id-edit"
  }, {
    path: "/projects/:id?",
    component: _44a328d0,
    name: "projects-id"
  }, {
    path: "/",
    component: _8c5ffd2c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
