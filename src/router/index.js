import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        sidebar: Header,
      },
      children: [
        {
          path: 'header',
          component: Header
        }
      ],
      alias: '/qwe'
    },
    {
      path: '/home',
      name: 'home1',
      components: {
        default: Home,
        sidebar: Header,
      },
      children: [
        {
          path: '',
          component: Header
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/post/:postId/comment/:commentId',
      name: 'post',
      props: (route) => ({... route.params, title: 'asdf' }),
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Post.vue')
    },
    {
      path: '/123',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((event)=> {
  console.log('afterEach', event);
})

export default router
