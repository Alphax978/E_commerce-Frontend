<template>

    <div style="min-height: 60vh">
    <router-view
      v-if="categories && products"
      :baseURL="baseURL"
      :categories="categories"
      :products="products"
      @fetchData="fetchData"
     
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
          console.log(this.categories);
        })
        .catch((err) => console.log('err', err));

        
      // api call to get the products
      // try 
      // {
      //     const response = await axios.get('http://localhost:8084/backend/category/show');
      //     const categories = response.data;

      //     // convert the base64-encoded images to image URLs
      //     // convert the base64-encoded images to image URLs
      //     categories.forEach(category => {
      //       let imageUrl;
      //       if (category.imageUrl.startsWith('data:image/jpeg')) {
      //         imageUrl = category.imageUrl;
      //       } else if (category.imageUrl.startsWith('data:image/png')) {
      //         imageUrl = category.imageUrl;
      //       } else {
      //         imageUrl = `data:image/jpeg;base64,${category.imageUrl}`;
      //       }
      //       category.imageUrl = imageUrl;
      //     });

       

      //     this.categories = categories;
      //     console.log(this.categories);
      // } catch (error) 
      // {
      //     console.error(error);
      // }
      await axios
        .get(`${this.baseURL}/backend/product/showun`)
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

