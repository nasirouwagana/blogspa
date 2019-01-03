import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    posts
  },
  strict: true
})

export default store
