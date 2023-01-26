import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About.vue";
import Sidebar from "@/views/general/Sidebar.vue";
import Post from "@/views/Post.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
      },
      children: [
        {
          path: 'header',
          component: Sidebar
        }
      ],
      alias: '/r',
    },
    {
      path: '/posts/:postId',
      name: 'post',
      component: Post,
      props: (route) => ({...route.params, flag: true}),
    },
    {
      path: encodeURI('/о-нас'),
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
      alias: '/about'
    },
    {
      path: '/:qwe(.*)*',
      component: Contact
    }
  ],
  scrollBehavior() {
    return {top:0, left: 0};
  }
})

export default router
