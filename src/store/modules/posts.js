import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

const state = {
  posts: [],
  post: ''
}

export const getters = {
  posts: state => state.posts,
  post: state => state.post
}

export const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload
  },

  SET_POST (state, payload) {
    state.post = payload
  }
}

export const actions = {
  getPosts ({ commit }) {
    axios.get(`${API_URL}/posts`)
      .then(response => {
        commit('SET_POSTS', response.data.slice(0, 8))
      })
  },

  getPost ({ commit }, payload) {
    return new Promise(resolve => {
      axios.get(`${API_URL}/posts/${payload}`)
        .then(response => {
          commit('SET_POST', response.data)
          resolve(response.data)
        })
        .catch(error => {
          resolve(error)
        })
    })
  },

  createPost ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${API_URL}/posts`, payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          resolve(error)
        })
    })
  },

  updatePost ({ commit, getters }, payload) {
    const { id, ...data } = payload

    return new Promise((resolve, reject) => {
      axios.put(`${API_URL}/posts/${id}`, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          resolve(error)
        })
    })
  },

  deletePost ({ commit, getters }, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${API_URL}/posts/${payload}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          resolve(error)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
