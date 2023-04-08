<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h4 class="pt-3"> {{category.categoryName}}</h4>
                        <h5 style="font-weight: 300; color: #686868"> {{msg}} </h5>
                    </div>
                </div>

                <div class="row">
                    <div v-for="product of category.products" :key="product.id"
                        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                        <ProductBox :product="product" />
                    </div>
                </div>
            </div>      
      </div>
      <AppFooter />
    </div>
  </div>


</template>

<script>
    import ProductBox from "../../components/ProductBox";
    import AppFooter from '../../components/AppFooter.vue'
    import AppHeader from '../../components/AppHeader.vue'
    import AppSidebar from '../../components/AppSidebar.vue'
    export default {
        components: {ProductBox,AppFooter,AppHeader,AppSidebar},
        data() {
            return {
                id: null,
                category: {},
                msg: ''
            }
        },
        props: ["categories"],
        mounted() {
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id)
            if (this.category.products.length == 0) {
                this.msg = "no products found"
            } else if (this.category.products.length == 1) {
                this.msg = "Only 1 product found"
            } else {
                this.msg = this.category.products.length + " products found"
            }
        }
    }
</script>