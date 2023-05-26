import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sidebar from "@/views/Sidebar.vue";
import Post from "@/views/Post.vue";
import Comment from "@/views/Comment.vue";
import CustomLayout from "@/views/CustomLayout.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter() {

      },
      component: () => import('../views/Home.vue'),
      alias: '/home',
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
      path: '/post/:postId',
      name: 'post',
      component: Post,
      props: { postId: 'qwe' },
      children: [
        {
          path: 'comment/:commentId',
          component: Comment,
          props: true,
        }
      ]
    },
    {
      path: '/custom',
      component: CustomLayout,
      children: [{
        path: 'home',
        component: Home,
      }]
    },
    {
      path: '/:wrongPath(.*)*',
      component: Contact,
    }
  ],
  scrollBehavior() {
    return {top: 0, left: 0}
  }
})

export default router
