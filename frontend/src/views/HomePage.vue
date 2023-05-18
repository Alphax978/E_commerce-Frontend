<template>
  <div id="home">
    <NavbarShow />
    <div id="background-div" class="page-holder bg-cover">
      <SliderSlide />
      
    </div> 

    <!--    display categories-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Categories</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="index in this.category_size" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryBox :category="categories[index-1]" />
        </div>
      </div>

    </div>

     <!-- display top products-->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Products</h2>
        </div>
      </div>

           <!-- display products -->

      <div class="row">
        <div v-for="index in this.product_size" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]" />
        </div>
      </div>
    </div> 
    <FooterShow/>
  </div>
</template>

<script>
import CategoryBox from "../components/Category/CategoryBox";
import ProductBox from "../components/ProductBox";
import NavbarShow from '../components/NavbarShow';
import FooterShow from '../components/FooterShow';
import SliderSlide from '../views/SliderSlide';
export default {
  name: "HomePage",
  components:{NavbarShow,SliderSlide, CategoryBox,ProductBox,FooterShow},
  props: ["baseURL","categories", "products"],
  data() {
    return {
         category_size:0,
         product_size:0
      
    }
  },

  mounted(){
     this.category_size = this.categories.length;
      this.category_size = Math.min(6, this.category_size);

      this.product_size = this.products.length;
      this.product_size = Math.min(6, this.product_size)
  }

};
</script>
<style scoped>
  .page-holder {
    min-height: 100vh;
  }
  .bg-cover{
    background-size: cover !important;
  }
  #background-div {
    /* background: url("../assets/home.png"); */
    
  }
  #heading {
    font-weight: 400;
  }

  .bg-dark{
    background-color: #343a40!important;
  }

  



</style>