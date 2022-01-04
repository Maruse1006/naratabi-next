import colors from 'vuetify/es5/util/colors'
const envPath = `.env.${process.env.ENV || 'local'}`
require('dotenv').config({ path: envPath })

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - naratabi-nuxt',
    title: 'naratabi-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      { src: '~/assets/sass/app.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/dotenv',
    '@nuxtjs/auth'
  ],
  dotenv: {
    filename: envPath
  },
  env: {
    // これを設定しないとNuxtでprocess.env.NODE_ENVを取得したときにデフォルトの値になってしまう
    NODE_ENV: process.env.NODE_ENV
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    //  baseURL: 'http://127.0.0.1:8000/api'
      baseURL: process.env.BASE_URL
  },
  auth: {
    redirect: {
      login: '/login',   // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/login',  // ログアウト時のリダイレクトURL
      callback: false,   // Oauth認証等で必要となる コールバックルート
      home: '/',         // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api/login', method: 'post', propertyName: 'token' },
          user: { url: 'api/me', method: 'get', propertyName: false},
          logout: false
        },
      }
    }
  },
  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL || 'http://locahost:3000',
  //   apiURL: process.env.API_URL || 'http://localhost:3333',
  // },
  // privateRuntimeConfig: {
  //   secret: process.env.SECRET_KEY,
  // }
}
