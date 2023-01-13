import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage';
import AddCategory from '../views/Category/AddCategory';
import CategoryMain from '../views/Category/CategoryMain';
import ProductMain from '../views/Product/ProductMain';
import AddProduct from '../views/Product/AddProduct';
import listProducts from '../views/Category/ListProducts';
import EditCategory from '../views/Category/EditCategory';
import EditProducts from '../views/Product/EditProduct';
import ShowDetails from '../views/Product/ShowDetails';
import WishList from '../views/Product/WishList';




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
  {
    path:'/admin/product/add',
    name:'AddProduct',
    component: AddProduct
  },
  {
    path:'/admin/product',
    name:'ProductMain',
    component: ProductMain
  },
  {
    path:'/admin/category/editcategory',
    name:'EditCategory',
    component: EditCategory
  },
  {
    path:'/admin/product/listproducts',
    name:'ListProducts',
    component: listProducts
  },
    // edit product
    {
      path: '/admin/Product/editproduct',
      name: 'EditProducts',
      component: EditProducts
    },
  
    // show details of product
    {
      path: '/admin/Product/showdetails',
      name: 'ShowDetails',
      component: ShowDetails
    },
    {
      path:'/admin/Product/wishlist',
      name:'WishList',
      component: WishList

    },






]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
