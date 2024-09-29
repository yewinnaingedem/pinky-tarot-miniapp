import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createI18n } from 'vue-i18n'
import router from './router'
import en from "../src/locale/en" ;
import my from "../src/locale/my" ;

// import w3 gecory css 
import "../src/assets/style/main.css" ;
// import custom css
import "../src/assets/style/custom.css" ;
const locale = createI18n({
    locale : "en-US" ,
    messages : {
        "en-US" : en ,
        "my-MM" : my 
    }
})

function startApp () {
    createApp(App)
        .use(locale)
        .use(store)
        .use(router)
    .mount('#app')
}
// start the app
startApp() ;