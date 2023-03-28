import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import TestForm from '../views/TestForm';
import AddCategory from '../views/Category/AddCategory';
import CategoryMain from '../views/Category/CategoryMain';
import ProductMain from '../views/Product/ProductMain';
import AddProduct from '../views/Product/AddProduct';
import listProducts from '../views/Category/ListProducts';
import VendoreditProduct from '../aVendor/views/Product/VendoreditProduct';
import ShowDetails from '../views/Product/ShowDetails';
import WishList from '../views/Product/WishList';
import CartPage from '../views/CartPage';
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import PaymentPage from '../views/Payment/PaymentPage'
import FailedP from '../views/Payment/FailedP';
import SuccessP from '../views/Payment/SuccessP';
import CheckOut  from '../views/Checkout/CheckOut';
import MakeOrder from '../views/orders/MakeOrder';
import OrderDetails from '../views/orders/OrderDetails';
import AdminLayout from '../Admin/layouts/AdminLayout';
import AdminaddProduct from '../Admin/views/Product/AdminaddProduct';
import ViewUser from '../Admin/views/User/ViewUser';
import AdminaddCategory from '../Admin/views/Category/AdminaddCategory';
import AdmincategoryMain from '../Admin/views/Category/AdmincategoryMain';
import AdminproductMain from '../Admin/views/Product/AdminproductMain';
import AdmineditCategory from '../Admin/views/Category/AdmineditCategory';
import SellerSign from '../views/SellerSign';
import SellerLogin from '../views/SellerLogin';
import AdminLogin from '../views/AdminLogin';
import AdminsignUp from '../views/AdminsignUp';
import VendorLayout from '../aVendor/layouts/VendorLayout';
import VendorproductMain from '../aVendor/views/Product/VendorproductMain';
import VendoraddProduct from '../aVendor/views/Product/VendoraddProduct';



















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
    path: '/form/form',
    name: 'TestForm',
    component: TestForm
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
    path:'/admin/view/users',
    name:'View Users',
    component: ViewUser
  },
  {
    path:'/product/listproducts/:id',
    name:'ListProducts',
    component: listProducts
  },
    // edit product
  {
    path: '/avendor/Product/editproduct/:id',
    name: 'EditProducts',
    component: VendoreditProduct
  },
  
    // show details of product
  {
    path: '/Product/showdetails/:id',
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
    path: '/Payment',
    name: 'Payment',
    component: PaymentPage
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

  {
    path:'/Adminpannel',
    name:'Welcome',
    component: AdminLayout,
 
  
  },

  {
    path:'/Adproduct',
    name:'Add product',
    component: AdminaddProduct,
 
  
  },

  {
    path:'/Adcategory',
    name:'Add Category',
    component: AdminaddCategory,
 
  
  },

  {
    path:'/vproduct',
    name:'view products',
    component: AdminproductMain,
 
  
  },

  {
    path:'/Admin/categpry/AdmineditCategory',
    name:'Adminedits',
    component: AdmineditCategory,
 
  },

  {
    path:'/vcategory',
    name:'View Categories',
    component: AdmincategoryMain,
 
  
  },

  {
    path:'/vsells',
    name:'SellerSign',
    component: SellerSign,
 
  
  },
  {
    path:'/vlogsin',
    name:'SellerLogin',
    component: SellerLogin,
 
  
  },
  {
    path:'/adminlogin',
    name:'AdminLogin',
    component: AdminLogin,
 
  
  },
  {
    path:'/adminsignup',
    name:'Adminsignup',
    component: AdminsignUp,
 
  
  },
  {
    path:'/vendorpannel',
    name:'Welcome Seller',
    component: VendorLayout,
 
  
  },

  {
    path:'/vendoradds',
    name:'Add Product',
    component: VendoraddProduct,
 
  
  },

  {
    path:'/vendorsees',
    name:'View Products',
    component: VendorproductMain,
 
  
  },




  


  




 
  
 



      









];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
