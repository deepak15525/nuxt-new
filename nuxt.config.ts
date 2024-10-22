// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'Nuxt Dojo',
      meta:[
        {name:'description', content: 'Everything about Nuxt 3'},
        { name: 'keywords', content: 'nuxt, vue, app' },
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    currencyKey:process.env.CURRENCY_API_KEY
  }
})