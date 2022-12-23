import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddCategory from '../views/Category/AddCategory'
import CategoryMain from '../views/Category/CategoryMain'


// const cors = require('cors');
// App.use(cors());

const routes = [
  //Router for 
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/AboutPage',
    name: 'AboutPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryMain',
    component: CategoryMain
  },





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
