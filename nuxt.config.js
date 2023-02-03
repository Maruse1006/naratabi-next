import * as FontAwesome from "./build/fontawesome";
import colors from "vuetify/es5/util/colors";
const envPath = `.env.${process.env.ENV || "local"}`;
require("dotenv").config({ path: envPath });

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - naratabi-nuxt",
    title: "naratabi-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/sass/app.scss", lang: "scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios",
    //'@/plugins/axios/index'
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    ["@nuxtjs/fontawesome", { component: "fontAwesome", suffix: true }],
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
    },
  ],
  fontawesome: {
    //     component:'fas',
    // 　　　　solid:['heart'],
    //        brands:true,
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "@nuxtjs/auth"],
  dotenv: {
    filename: envPath,
  },
  env: {
    // これを設定しないとNuxtでprocess.env.NODE_ENVを取得したときにデフォルトの値になってしまう
    NODE_ENV: process.env.NODE_ENV,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    //middleware: ['auth']
  },
  proxy: {
    "/api/": {
      target: "'http://localhost:8000/'",
      pathRewrite: { "^/api/": "" },
    },
  },
  axios: {
    // baseURL: "http://ec2-54-199-154-70.ap-northeast-1.compute.amazonaws.com",
    //baseURL: process.env.BASE_URL,
    // baseURL: ENV.BASE_URL,
    // proxyを使用する場合baseURLは併用できないためコメントアウト
    // baseURL: process.env.API_BASE_URL,
    // baseURL と proxy を同時に使用することはできないためprefixを設定し、baseURLとして使用する
    prefix: process.env.BASE_URL,
    proxy: true,
  },
  auth: {
    redirect: {
      login: "/login", // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: "/login", // ログアウト時のリダイレクトURL
      callback: false, // Oauth認証等で必要となる コールバックルート
      home: "/", // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        token: {
          type: "Bearer",
        },
        endpoints: {
          login: { url: "/login", method: "post", propertyName: "token" },
          user: { url: "/user", method: "get", propertyName: false },
          logout: { url: "/logout", method: "post" },
        },
      },
    },
  },
  publicRuntimeConfig: {
    // baseURL:
    //   process.env.BASE_URL ||
    //   "http://ec2-54-199-154-70.ap-northeast-1.compute.amazonaws.com",
    // apiURL: process.env.API_URL || "http://localhost:3333",
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
};
