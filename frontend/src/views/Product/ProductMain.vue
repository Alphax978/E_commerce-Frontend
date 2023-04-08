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
            <div v-for= " product of products " :key="product.id"
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
    import ProductBox from "../../components/ProductBox";
    import NavbarShow from '../../components/NavbarShow';
    import FooterShow from '../../components/FooterShow';


    export default {
    name: "ProductMain",
    props:["baseURL"],
    components: {ProductBox,NavbarShow,FooterShow },

    data(){
      return{
        products:[],
      }
    },
    methods:{
       async getProducts(){
            await axios
                .get(`${this.baseURL}/backend/product/showun`)
                .then((res) => (this.products = res.data ))
                .catch((err) => console.log(err));
        },
    },
    mounted()
    {
        this.token = localStorage.getItem("token");
        this.getProducts();
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