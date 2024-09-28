import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createI18n } from 'vue-i18n'
import router from './router'
import en from "../src/locale/en" ;
import my from "../src/locale/my" ;


//import bootstrap latest version 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import custom css 
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
