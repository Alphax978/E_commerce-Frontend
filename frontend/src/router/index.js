import { createRouter, createWebHistory } from 'vue-router';
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
import CartPage from '../views/CartPage';
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import FailedP from '../views/Payment/FailedP';
import SuccessP from '../views/Payment/SuccessP';
import CheckOut  from '../views/Checkout/CheckOut';
import MakeOrder from '../views/orders/MakeOrder';
import OrderDetails from '../views/orders/OrderDetails';
import DashboardShows from '../Admin/views/DashboardShows';
import DashboardHome from '../Admin/views/dashboard/DashboardHome';
















const routes = [
  //Router for 
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
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
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path:'/FailedP',
    name:'FailedP',
    component: FailedP
  },
  {
    path:'/SuccessP',
    name:'SuccessP',
    component: SuccessP
  },
  {
    path:'/checkout',
    name:'CheckOut',
    component: CheckOut
  },
  {
    path:'/orders',
    name:'MakeOrder',
    component: MakeOrder
  },
  {
    path:'/ordersDetails',
    name:'OrderDetails',
    component: OrderDetails
  },

 
  
 



      









];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
