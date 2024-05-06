// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            links: {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Display:wght@500&display=swap&family=Roboto+Condensed:wght@700&display=swap"
            }
        }
    },
    modules: ['@nuxtjs/i18n'],
    i18n: {
        compilation: {
            strictMessage: false,
        },
        strategy: 'prefix',
        defaultLocale: 'fr',
        locales: [
            {
                code: 'fr',
                file: 'fr-FR.yml'
            },
            {
                code: 'en',
                file: 'en-US.yml'
            }
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected'
        },
        langDir: 'lang',
        vueI18nLoader: true,
        lazy: false,
        skipSettingLocaleOnNavigate: true
    },
    ssr: true,
    devtools: {enabled: true},
    components: [
        {
            path: '~/components'
        }
    ],
    css: ['assets/css/main.css'],
    build: {
        transpile: [
            "gsap"
        ]
    }
})