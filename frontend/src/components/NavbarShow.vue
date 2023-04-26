<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Navbar content -->
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'HomePage' }">
         <h4  id="logs">Easy Shop</h4>
    </router-link>
    <!--    Burger Button-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto" @submit.prevent="searchProducts(query)">
        <div class="input-group">
          <input
            size="100"
            type="text"
            v-model="query"
            class="form-control"
            placeholder="Search Items"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
                <button class="in" type="submit"><i class="fa fa-search"></i></button>
            </span>
          </div>
        </div>
      </form>
      <!-- dropdown for browse -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
          >
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link class="dropdown-item" :to="{ name: 'HomePage' }"
              >Home
            </router-link>
            <router-link class="dropdown-item" :to="{ name:'ProductMain'}"
              >Product
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'CategoryMain' }"
              >Category
            </router-link>
       

          </div>

        </li>
        <div class="nav-link  text-light" v-if="token"> <CAvatar :src="avatar"  /> </div>

           <li class="nav-item">
          <div class="nav-link text-light"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
          >

          <div v-for="alltoken in alltokens" :key="alltoken.id" > 
          <a
      
            v-if="token"
            

            

          >
         
         
            <a 
            v-if="token == alltoken.token" >
              {{alltoken.user.firstName}} 
              
            </a>   


         
      
          
          </a>
          </div>
          </div>
          
          
        </li>




































        
        <li class="nav-item dropdown" >
          <a
            class="nav-link dropdown-toggle text-light"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
            v-if="!token"
            
          >
            Accounts
          </a>

          <a
            class="nav-link dropdown-toggle text-light"
            href="#"
            id="navbarAccount"
            data-toggle="dropdown"
            v-if="token"
            
          >
            Profile
          </a>


    
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link
              v-if="token"
              class="dropdown-item"
              :to="{ name: 'WishList' }"
              >Wishlist
            </router-link>
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'SignUp' }"
              >Sign up
            </router-link>
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'AdminLogin' }"
              >Admin
            </router-link>
            <router-link
              v-if="!token"
              class="dropdown-item"
              :to="{ name: 'SignIn' }"
              >Sign in
            </router-link>
             <router-link
              v-if="token"
              class="dropdown-item"
              :to="{ name: 'EditUser' }"
              >Edit Profile
            </router-link>
  
            <a class="dropdown-item" v-if="token" href="#" @click="signout"
              >Sign out
            </a>
          </div>
        </li> 

      

        <li class="nav-item">
          <router-link class="nav-link text-light" v-if="token" :to="{ name: 'MakeOrder' }"
            >My Orders</router-link>
        </li>

        <li class="nav-item"> 
          <div id="cart" style="position:relative" v-if="token">
            <!-- <span id="nav-cart-count">{{ cartCount }}</span> -->
            <router-link class="text-light" :to="{ name: 'Cart' }">
              <i class="fa fa-shopping-cart" style="font-size:36px" aria-hidden="true"> </i>
            </router-link>
          </div>
        </li>
      </ul>
      <!-- dropdown for account -->
    </div>
  </nav>
</template>
<script>
import swal from "sweetalert";
import avatar from '../Admin/assets/images/avatars/user1.png'
import axios from 'axios';

export default {
  name: "NavbarShow",
  props: ["cartCount"],
  data() {
    return {
      avatar:avatar,
      token: null,
      baseURL:"http://localhost:8084",
      users:[],
      alltokens:[],
      name:"",
      query:[],
      results:[],
    
    };
  },
  methods: {
    // beforeUnload(){
    //   this.browserLogout();
    // },
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      swal({
        text: "Logged you out. Visit again",
        icon: "success",
      });
      this.$emit("resetCartCount");
      this.$router.push({ name: "HomePage" });
    },
    browserLogout(){
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
    },

    getTokens(){
      axios
        .get(`${this.baseURL}/backend/token/show`)
        .then((res) => (this.alltokens = res.data))
        .catch((err) => console.log(err));


    },
    searchProducts(query) {
      axios
        .get(`${this.baseURL}/backend/product/products/search/${query}`)
        .then(response => {
            console.log(response.data);
            if (response.data.length > 0) {
              // Navigate to first product details page with response data
              this.$router.push(`/product/${response.data[0].id}`);
            } else {
              alert("Product not found");
            }
          })
         
        .catch((error) => {
          console.log(error);
        });
    },
    
  },
  mounted() {
    // window.addEventListener('beforeunload', this.beforeUnload);
    this.token = localStorage.getItem("token");
    this.getTokens();
  },
  // beforeUnmount() {
  //   window.removeEventListener('beforeunload', this.beforeUnload);
  // },
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

#logs {
  width: 150px;
  margin-left: 20px;
  margin-right: 27px;
}

h4{
  color: #febd69;
  word-spacing: 4px;
  font-family: 'Oswald', sans-serif;
  font-size: 30px;
  padding-left: 30px;
  padding-top: 6px;
 
}
.png{
    color: #343a40!important;

}
.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 15px;
  align-items: center;

  display: flex;
  justify-content: center;

  position: absolute;
  margin-left: 10px;
}

.bg-dark{
  background-color: #343a40!important;
}

.in{
  background-color: #febd69;
  border: #febd69;
}



</style>