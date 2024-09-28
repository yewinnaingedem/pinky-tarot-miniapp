import { createWebHashHistory , createRouter } from "vue-router";
import HomePage from "@/page/HomePage.vue";

const routes = [
    {
        path : '/',
        name : "home" ,
        component : HomePage ,
    }
] ;

const router = createRouter({
    history : createWebHashHistory() ,
    routes ,
}) ;

export default router ;