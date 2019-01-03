import { mutations } from '../../src/store/modules/posts'

describe('mutations', () => {
  it('SET_POSTS', () => {
    const state = {
      posts: []
    }

    const posts = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    ]

    mutations.SET_POSTS(state, posts)
    expect(state.posts).toHaveLength(1)
  })

  it('SET_POST', () => {
    const state = {
      post: ''
    }

    const post = {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    }

    mutations.SET_POST(state, post)
    expect(state.post).toBe(post)
  })
})
