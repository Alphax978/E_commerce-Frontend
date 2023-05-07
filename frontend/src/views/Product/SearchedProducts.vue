<template>
<div>
    <NavbarShow/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="pt-3"> Our Products</h2>
            </div>
        </div>
        <div class="row">
<!--            display all the products in productbox component-->
            <div 
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex justify-content-around d-flex">
                <ProductBox :product="product"/>
            </div>
        </div>
    </div>
    <FooterShow/>
</div>
</template>

<script>
    const axios = require("axios");
    import ProductBox from "../../components/SearchedProductsBox";
    import NavbarShow from '../../components/NavbarShow';
    import FooterShow from '../../components/FooterShow';


    export default {
    name: "ProductMain",
    components: {ProductBox,NavbarShow,FooterShow },

    data(){
      return{
        baseURL:"http://localhost:8084",
        product:[],
        id:null,
      }
    },
    methods:{
        getProduct() {

            axios.get(`${this.baseURL}/backend/product/${this.id}`)
            .then(response => {
                this.product = response.data;
                console.log(this.product);
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted()
    {
        this.token = localStorage.getItem("token");
        this.id = this.$route.params.id;
        this.getProduct();
     
            
    },
  
  
 

    };
</script>

<style scoped>
.card{
  width : 20rem;
  height : 24rem;
}
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
#add-product {
  float: right;
  font-weight: 500;
}
</style>