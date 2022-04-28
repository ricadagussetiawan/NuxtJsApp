export { default as CallToAction } from '../..\\components\\CallToAction.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'

export const LazyCallToAction = import('../..\\components\\CallToAction.vue' /* webpackChunkName: "components_CallToAction" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
