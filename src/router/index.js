import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
      path: '/posts/:id(\\d+)',
      name: 'posts.show',
      component: () => import('../views/Post'),
      props: true
    },
    {
      path: '/admin/posts',
      name: 'admin.posts.index',
      component: () => import('../views/Post/Index')
    },
    {
      path: '/admin/posts/:id(\\d+)',
      name: 'admin.posts.show',
      component: () => import('../views/Post/Show'),
      props: true
    },
    {
      path: '/admin/posts/create',
      name: 'admin.posts.create',
      component: () => import('../views/Post/Create')
    },
    {
      path: '/admin/posts/:id(\\d+)/edit',
      name: 'admin.posts.edit',
      component: () => import('../views/Post/Edit'),
      props: true
    }
  ]
})
