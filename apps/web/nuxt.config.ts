// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: 'latest',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3001
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/poland-tour-guide/' : '/',
  },
  runtimeConfig: {
    public: {
      serverURL: process.env.NUXT_PUBLIC_SERVER_URL,
    }
  },
  i18n: {
    defaultLocale: 'pl',
    locales: [
      { code: 'pl', name: 'Polski', file: 'pl.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ua', name: 'Українська', file: 'ua.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    precompile: {
      strictMessage: false
    },
    vueI18n: './i18n.config.ts'
  }
})