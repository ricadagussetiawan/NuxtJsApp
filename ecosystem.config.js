module.exports = {
  apps : [
    {
    name   : "richs-startup",
    exec_mode: "cluster",
    instances: "./node_modules/nuxt/bin/nuxt.js",
    args: "start",
   },
  ],
}
