import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8897f026 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _586e5dca = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _dc75225c = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _2977a5f0 = () => interopDefault(import('..\\pages\\register-success.vue' /* webpackChunkName: "pages/register-success" */))
const _11ab48f0 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _8bee0aec = () => interopDefault(import('..\\pages\\dashboard\\transactions.vue' /* webpackChunkName: "pages/dashboard/transactions" */))
const _77d961d9 = () => interopDefault(import('..\\pages\\transaction\\error.vue' /* webpackChunkName: "pages/transaction/error" */))
const _690fc392 = () => interopDefault(import('..\\pages\\transaction\\finish.vue' /* webpackChunkName: "pages/transaction/finish" */))
const _7fc96daa = () => interopDefault(import('..\\pages\\transaction\\unfinish.vue' /* webpackChunkName: "pages/transaction/unfinish" */))
const _02c8ed2b = () => interopDefault(import('..\\pages\\dashboard\\projects\\create.vue' /* webpackChunkName: "pages/dashboard/projects/create" */))
const _22cbf107 = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\index.vue' /* webpackChunkName: "pages/dashboard/projects/_id/index" */))
const _338b1536 = () => interopDefault(import('..\\pages\\dashboard\\projects\\_id\\edit.vue' /* webpackChunkName: "pages/dashboard/projects/_id/edit" */))
const _185fcbe1 = () => interopDefault(import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _e2728a9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _8897f026,
    name: "dashboard"
  }, {
    path: "/login",
    component: _586e5dca,
    name: "login"
  }, {
    path: "/register",
    component: _dc75225c,
    name: "register"
  }, {
    path: "/register-success",
    component: _2977a5f0,
    name: "register-success"
  }, {
    path: "/upload",
    component: _11ab48f0,
    name: "upload"
  }, {
    path: "/dashboard/transactions",
    component: _8bee0aec,
    name: "dashboard-transactions"
  }, {
    path: "/transaction/error",
    component: _77d961d9,
    name: "transaction-error"
  }, {
    path: "/transaction/finish",
    component: _690fc392,
    name: "transaction-finish"
  }, {
    path: "/transaction/unfinish",
    component: _7fc96daa,
    name: "transaction-unfinish"
  }, {
    path: "/dashboard/projects/create",
    component: _02c8ed2b,
    name: "dashboard-projects-create"
  }, {
    path: "/dashboard/projects/:id",
    component: _22cbf107,
    name: "dashboard-projects-id"
  }, {
    path: "/dashboard/projects/:id?/edit",
    component: _338b1536,
    name: "dashboard-projects-id-edit"
  }, {
    path: "/projects/:id?",
    component: _185fcbe1,
    name: "projects-id"
  }, {
    path: "/",
    component: _e2728a9a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
