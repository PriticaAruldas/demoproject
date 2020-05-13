import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '@/components/Friends.vue'
import Contacts from '@/components/Contacts.vue'
import Accounts from '@/components/Accounts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
