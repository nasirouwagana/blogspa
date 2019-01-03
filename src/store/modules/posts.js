import axios from 'axios'

const state = {
  posts: []
}

const getters = {
  posts: state => state.posts
}

const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload
  }
}

const actions = {
  posts ({ commit }) {
    axios.get(`${process.env.VUE_APP_API_URL}/posts`)
      .then(response => {
        commit('SET_POSTS', response.data.slice(0, 8))
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
