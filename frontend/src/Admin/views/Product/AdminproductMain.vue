
<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">

            <div class="row">
                <div class="col-12 text-center">
                <h4> Our Products</h4>
                <router-link :to="{name: 'AddProduct'}" style="float: right">
                    <button class="btn" >
                        Add Product
                    </button> 
                </router-link>
                </div>
            </div>

            <div class="row">
         
                <div v-for="product of products" :key="product.id"
                    class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                    <ProductBox :product="product"/>
                </div>
           </div>




    












































       
      </div>
      <AppFooter />
    </div>
  </div>
</template>








































<script>
    import AppFooter from '../../components/AppFooter.vue'
    import AppHeader from '../../components/AppHeader.vue'
    import AppSidebar from '../../components/AppSidebar.vue'
    import ProductBox from "../../components/ProductBox";
    export default {
        components: {
            ProductBox,
            AppFooter,
            AppHeader,
            AppSidebar,
        },
        props:["products"],
    }
</script>