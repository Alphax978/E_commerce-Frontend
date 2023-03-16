<template>

    <div style="min-height: 60vh">
    <router-view
      v-if="categories && products"
      :baseURL="baseURL"
      :categories="categories"
      :products="products"
     
    >
    </router-view>
  </div>
  
   


</template>

<script>
// import NavbarShow from './components/NavbarShow';
// import FooterShow from './components/FooterShow';
import axios from 'axios';

export default {
  data() {
    return {
      baseURL: 'http://localhost:8084',
      //baseURL: 'http://localhost:8080/',
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios
        .get(`${this.baseURL}/backend/category/show`)
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log('err', err));
      // api call to get the products
      await axios
        .get(this.baseURL + '/backend/product/showun')
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log('err', err));
      // fetch cart item if token is present i.e logged in
      if (this.token) {
        axios
          .get(`${this.baseURL}/backend/cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log('err', err));
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.fetchData();
  },
}



</script>

<style>
html {
  overflow-y: scroll;
}
</style>

