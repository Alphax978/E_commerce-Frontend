<template>
<div>
  <NavbarShow/>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="pt-3">Your WishList</h2>
      </div>
    </div>

    <!-- diaplay products -->

    <div class="row">
      <div
        v-for="product of products"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <Box :product="product"> </Box>
      </div>
    </div>

  </div>
  <FooterShow/>

</div>
</template>
<script>
import axios from "axios";
import Box from "../../components/WishListBox.vue";
import NavbarShow from '../../components/NavbarShow';
import FooterShow from '../../components/FooterShow';
export default {
  components: {NavbarShow,FooterShow,Box},
  data() {
    return {
      token: null,
      products: null,
      wishItems:[],
    };
  },
  props: ["baseURL"],
  methods: {
    fetchWishList() {
      axios
        .get(`${this.baseURL}/backend/wishlist/${this.token}`)
        .then((data) => {
          this.products = data.data;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
 
 
  
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchWishList();
  },
};
</script>

<style scoped>

</style>