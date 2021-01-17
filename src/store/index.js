import { createStore } from 'vuex'
import getHeros from "@/reusables/getHeros";

const store = createStore({
    state:{
        heros:[],
    },
    getters:{
        getHeros: (state) => {
            getHeros().then(data => {
                state.heros = data
            })
        }
    }
})

export default store