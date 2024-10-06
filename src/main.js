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

function startApp () {
    const lang = createI18n({
        locale : "en-US" ,
        legacy : false ,
        messages : {
            "en-US" : en ,
            "my-MM" : my 
        }
    })
    
    createApp(App)
        .use(lang)
        .use(store)
        .use(router)
    .mount('#app')
}
// start the app
startApp() ;