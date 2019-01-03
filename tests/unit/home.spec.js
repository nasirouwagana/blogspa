import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { getters } from '../../src/store/modules/posts'
import Home from '../../src/views/Home'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home.vue', () => {
  let store
  let state
  let actions

  beforeEach(() => {
    state = {
      posts: []
    }

    actions = {
      getPosts: jest.fn()
    }

    store = new Vuex.Store({
      state,
      getters,
      actions
    })
  })

  it('check if store.getPosts works', () => {
    const wrapper = shallowMount(Home, {
      store, localVue
    })

    expect(wrapper.is(Home)).toBe(true)

    expect(actions.getPosts.mock.calls).toHaveLength(1)
  })
})
