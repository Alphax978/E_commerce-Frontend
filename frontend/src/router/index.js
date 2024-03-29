import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import SearchedProducts from '../views/Product/SearchedProducts';
import CategoryMain from '../views/Category/CategoryMain';
import ProductMain from '../views/Product/ProductMain';
import listProducts from '../views/Category/ListProducts';
import VendoreditProduct from '../aVendor/views/Product/VendoreditProduct';
import ShowDetails from '../views/Product/ShowDetails';
import WishList from '../views/Product/WishList';
import profile from '../views/UsereditProfile';
import Passwordchange from '../views/UserChangePassword';
import CartPage from '../views/CartPage';
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import FailedP from '../views/Payment/FailedP';
import SuccessP from '../views/Payment/SuccessP';
import CheckOut  from '../views/Checkout/CheckOut';
import MakeOrder from '../views/orders/MakeOrder';
import OrderDetails from '../views/orders/OrderDetails';
import AdminLayout from '../Admin/layouts/AdminLayout';
import ViewUser from '../Admin/views/User/ViewUser';
import AdminPassword from '../Admin/views/User/AdminChangePassword';
import ViewVendors from '../Admin/views/Vendors/ViewVendor';
import AdminaddCategory from '../Admin/views/Category/AdminaddCategory';
import AdmincategoryMain from '../Admin/views/Category/AdmincategoryMain';
import AdmineditCategory from '../Admin/views/Category/AdmineditCategory';
import SellerSign from '../views/SellerSign';
import SellerLogin from '../views/SellerLogin';
import AdminLogin from '../views/AdminLogin';
import AdminsignUp from '../views/AdminsignUp';
import VendorLayout from '../aVendor/layouts/VendorLayout';
import VendorproductMain from '../aVendor/views/Product/VendorproductMain';
import VendorsoldProduct from '../aVendor/views/Product/VendorsoldProduct';
import VendoraddProduct from '../aVendor/views/Product/VendoraddProduct';
import VendoreditProfile from '../aVendor/views/User/VendoreditProfile';
import VendorPassword from '../aVendor/views/User/VendorChangePassword';
import AdmineditProfile from '../Admin/views/User/AdmineditProfile';
import AdminConfirmOrder from '../Admin/views/Orders/AdminConfirmOrder';
import AdminAddImage from '../Admin/views/Image/AdminAddImage';
import AdminViewImage from '../Admin/views/Image/AdminViewImage';
import VendorAddImage from '../aVendor/views/Image/VendorAddImage';
import VendorViewImage from '../aVendor/views/Image/VendorViewImage';




















const routes = [
  //Router for 
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },

  {
    path: '/admin/category',
    name: 'CategoryMain',
    component: CategoryMain
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
    path:'/admin/view/vendors',
    name:'View Vendors',
    component: ViewVendors
  },
  {
    path:'/product/listproducts/:id',
    name:'ListProducts',
    component: listProducts
  },
    // edit product
  {
    path: '/avendor/Product/editproduct/:id',
    name: 'Edit Products',
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
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path:'/payment/failed',
    name:'FailedP',
    component: FailedP
  },
  {
    path:'/user/edit',
    name:'EditUser',
    component: profile
  },
  {
    path:'/payment/success',
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
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  },

  {
    path:'/Adminpannel',
    name:'Welcome',
    component: AdminLayout,
 
  
  },

 

  {
    path:'/Adcategory',
    name:'Add Category',
    component: AdminaddCategory,
 
  
  },

 

  {
    path:'/Admin/categpry/AdmineditCategory/:id',
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
  {
    path:'/vendorsold',
    name:'Sold Products',
    component: VendorsoldProduct,
 
  
  },
  {
    path:'/vendorprofile',
    name:'Vendor Profile',
    component: VendoreditProfile,
 
  
  },
  {
    path:'/Adminprofile',
    name:'Admin Profile',
    component: AdmineditProfile,
 
  
  },
  {
    path: '/product/:id',
    name:'Search Products',
    component: SearchedProducts,
 
  
  },
  {
    path:'/admin/order/view',
    name:"Admin Order",
    component: AdminConfirmOrder,
  },
  {
    path:'/admin/image/add',
    name:"Adminadd Image",
    component: AdminAddImage,
  },
  {
    path:'/admin/image/view',
    name:"Adminview Image",
    component: AdminViewImage,
  },
  {
    path:'/vendor/image/add',
    name:"vendornadd Image",
    component: VendorAddImage,
  },
  {
    path:'/vendor/image/view',
    name:"vendorview Image",
    component: VendorViewImage,
  },
  {
    path:'/user/password',
    name:"Change Password",
    component: Passwordchange,
  },
  {
    path:'/vendor/password',
    name:'Vendor Password',
    component: VendorPassword
  },
  {
    path:'/admin/password',
    name:'Admin Password',
    component: AdminPassword
  }









  


  




 
  
 



      









];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
