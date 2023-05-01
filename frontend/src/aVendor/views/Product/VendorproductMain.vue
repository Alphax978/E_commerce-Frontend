
<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">

            <div class="row">
                <div class="col-12 text-center">
                <h4>Your  Products</h4>
                <router-link :to="{path: 'vendoradds'}" style="float: right">
                    <button type = "button" class="btn btn-primary" >
                        Add Product
                    </button> 
                    <br/>
                    <br/>
                </router-link>
                </div>
            </div>

            <div class="row">
                 <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>In Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody v-for="all in productItems" :key="all.id">
                        <tr v-for="product in all" :key="product.id">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.description}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.stock}}</td>
                            <td> 
                              <router-link :to="{name: 'Edit Products', params: {id: product.id}}" >
                              <button type="button" class="btn btn-info"><i class="far fa-edit"></i></button>
                              </router-link>
                              <button type="button" class="btn btn-danger" @click="deleteItem(product.id)"><i class="bi bi-trash"></i></button>
                            </td>
              
                        </tr>
                    </tbody>
                  </table>

         
                
           </div>
       
      </div>
      <AppFooter />
    </div>
  </div>
  
</template>





<script>
    const axios = require("axios");
    import AppFooter from '../../components/AppFooter.vue'
    import AppHeader from '../../components/AppHeader.vue'
    import AppSidebar from '../../components/AppSidebar.vue'
    // import swal from 'sweetalert'
    // import ProductBox from "../../components/ProductBox";
    export default {
        components: {
            // ProductBox,
            AppFooter,
            AppHeader,
            AppSidebar,
        },
        props:["baseURL"],
        data(){
          return{
            productItems:[],
          };
        },
        methods:{
          async getProducts(){
            await axios
                .get(`${this.baseURL}/backend/product/vendorshow/?token=${this.token}`)
                // .get(`${this.baseURL}/backend/product/showun`)
                .then((res) => { 
                  this.productItems = res.data 
                  console.log(this.productItems)
                })
                .catch((err) => console.log(err));
          },

          deleteItem(productId) {
                  axios
                    .delete(`${this.baseURL}/backend/product/delete/${productId}/?token=${this.token}`)
                    .then((res) => {
                      if (res.status == 200) {
                        this.$router.go(0);
                        
                      }
                    })
                    .catch((err) => console.log('err', err));
            },
        },
        mounted()
        {
          this.token = localStorage.getItem("token");
          this.getProducts();
        },
  
}
</script>