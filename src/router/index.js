import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from "@/views/Post.vue";
import Comment from "@/views/Comment.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/h',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/posts/:postId',
      name: 'post',
      component: Post,
      props: true,
      children: [
        {
          path: 'comments/:commentId',
          props: true,
          component: Comment,
        }
      ]
    },
    {
      path: '/home',
      redirect: '/'
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Contact },
  ],
  scrollBehavior(to, from, prevScroll) {
    return { top: 0, left: 0 }
  }
})

export default router
