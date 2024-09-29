import { createWebHashHistory , createRouter } from "vue-router";
import HomePage from "@/page/HomePage.vue";

const routes = [
    {
        path : '/',
        name : "home" ,
        component : HomePage ,
    },
    {
        path : "/quoteDetails/:name" ,
        name : "quoteDetails" ,
        component : () => import('@/page/QuoteDetails.vue')
    },
    {
        path : "/faq" ,
        name : "faq" ,
        component : () => import('@/page/FAQPage.vue')
    },
    {
        path : "/tacs",
        name : "tacs" ,
        component : () => import('@/page/TACPage.vue')
    }
] ;

const router = createRouter({
    history : createWebHashHistory() ,
    routes ,
}) ;

export default router ;