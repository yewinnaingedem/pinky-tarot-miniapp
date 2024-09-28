import { createStore } from "vuex";
import action from "./modules/action";
import getter from "./modules/getter";
import mutaition from "./modules/mutaition";
import states from "./modules/states";


const state = {
    ...states
}

const getters = {
    ...getter
}

const actions = {
    ...action
}

const mutations = {
    ...mutaition
}

const store = createStore({
    state,getters,actions,mutations
});

export default store ;