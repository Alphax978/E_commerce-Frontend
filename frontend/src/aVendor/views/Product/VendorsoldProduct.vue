<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">

            <div class="row">
                <div class="col-12 text-center">
                <h4>Your Ordered Products</h4>
                </div>
            </div>
            <br/>

            <div class="row">
                 <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr >
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Total Sold</th>
                            <th>Sold Per Unit price</th>
                        </tr>
                    </thead>
                    <tbody v-for="all in productItems" :key="all.id">
                        <tr v-for="product in all" :key="product.id" >
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.description}}</td>
                            <td>{{product.totalsold}}</td>
                            <td>{{product.price * product.totalsold}}</td>
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
//   const axios = require("axios");
    import AppFooter from '../../components/AppFooter.vue'
    import AppHeader from '../../components/AppHeader.vue'
    import AppSidebar from '../../components/AppSidebar.vue'
    import axios from 'axios'
export default {
    components:{AppFooter, AppHeader, AppSidebar},
    data(){
        return{
            productItems:[],
            token:null,
            sellerid:null,
            alltokens:[],


        }
    },
    props:["baseURL"],
    methods:{
            async getProducts(){
            await axios
                .get(`${this.baseURL}/backend/product/vendorshow/?token=${this.token}`)
                // .get(`${this.baseURL}/backend/product/showun`)
                .then((res) => {
                    this.productItems = res.data;
                    this.sellerid  = res.data.sellerId;
                    console.log(this.productItems.sellerid);
                    for (let i = 0; i < this.productItems.length; i++)
                    {
                        this.sellerid = this.productItems.productItems[i].sellerId;
                        console.log(this.sellerid);
                       


                           
                    }
                })
                .catch((err) => console.log(err));
          },

          getTokens(){
            axios
                .get(`${this.baseURL}/backend/token/showsall`)
                .then((res) => { 
                    this.alltokens = res.data;
                    console.log(this.alltokens)
                    if (this.token == this.alltokens.token){
                        console.log("fouund")
                    }
                })
                .catch((err) => console.log(err));
            }

        
       
    
       


    },
    mounted(){
        this.token = localStorage.getItem("token");
        this.getTokens();
        this.getProducts();
    }
    
}
</script>
