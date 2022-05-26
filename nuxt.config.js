export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
//   baseURL : 'https://ricad-store.my.id',
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
//   baseURL : 'https://ricad-store.my.id',
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
//     '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
//     proxy: true,
//     baseURL  : 'https://richstore.my.id',
//   baseURL  : 'http://103.183.75.93',
//     baseURL : 'https://627057f96a36d4d62c1804a0.mockapi.io',
//     baseURL : 'https://103.186.0.49:443',
    baseURL : 'http://103.181.143.190:8080',
//     baseURL : 'https://ricad-store.my.id',
//    baseURL : 'https://ricad-store.my.id',
    
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  proxy : {
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/sessions',
            method: 'post',
            propertyName: 'data.token',
          },
          logout: false,
          user: {
            url: '/api/v1/users/fetch',
            method: 'get',
            propertyName: 'data',
          },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true,
      },
    },
  },
    },
  build: {},
}
