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
                            <th>Quantity Ordered</th>
                            <th>Ordered at Total Price</th>
                            <th>Actions</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody v-for="all in totalOrders" :key="all.id">
                        <tr >
                            <td>{{all.id}}</td>
                            <td>{{all.product.name}}</td>
                            <td>{{all.quantity}}</td>
                            <td>{{all.price * all.quantity}}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" :disabled="isConfirmDisabled(all.orderStatus)" @click="Confirm(all.product.name)">Confirm</button>
                                |
                                <button class="btn btn-danger btn-sm" :disabled="isCancelDisabled(all.orderStatus)" @click="shipmentStarted(all.product.name)">Cancel</button>
                            </td>
                            <td>{{all.orderStatus}}</td>

                            <!-- <td>{{all.price *all.totalsold}}</td> -->
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
            sellerid: null,
            alltokens:[],
            totalOrders:[],
            


        }
    },
    props:["baseURL"],
    methods:{
            async getProducts(){
            await axios
                .get(`${this.baseURL}/backend/product/vendorshow/?token=${this.token}`)
                .then((res) => {
                      if (res.data && res.data.productItems && res.data.productItems.length > 0) {
                            this.productItems = res.data.productItems;
                            this.sellerid = this.productItems[0].sellerId;
                            console.log(this.sellerid);
                            this.getVendorOrders();
                        } else {
                            console.log("No product items found.");
                        }                   
                })
                .catch((err) => console.log(err));
                       


                           
                //     }
                // })
                // .catch((err) => console.log(err));


          },

          getVendorOrders(){
            const selleridInt = parseInt(this.sellerid);
             axios
                .get(`${this.baseURL}/backend/order/allbyseller/${selleridInt}`)
                .then((res) => {
                    this.totalOrders = res.data;
                    console.log(this.totalOrders);
                })
                .catch((err) => console.log(err))
          },

        Confirm(name){
               const newitem = {
                orderStatus:"Confirmed || Processing Started",

            }
            axios({
                    method: "Post",
                    url:`${this.baseURL}/backend/order/orderupdate/${name}`,
                    data: JSON.stringify(newitem),
                    headers: {
                        "content-Type":"application/json"
                    },
            })

            .then(() => {

                  
                    
            })
            .catch((err) => {
                    console.log(err);
            })
            location.reload();

            

        },

        shipmentStarted(name){


            const newitem = {
                orderStatus:"Cancelled",

            }
            
            axios({
                    method: "Post",
                    url:`${this.baseURL}/backend/order/orderupdate/${name}`,
                    data: JSON.stringify(newitem),
                    headers: {
                        "content-Type":"application/json"
                    },
            })

            .then(() => {
                  
                    
            })
            .catch((err) => {
                    console.log(err);
            })
            location.reload();



        },

        isConfirmDisabled(status){
            if (status === null)
            {
                return false;
            }
            return true;
           
            


        },

        isCancelDisabled(status){
            if (status === null)
            {
                return false;
            }
            return true;

        }

         
        
       
    
       


    },
    mounted(){
        this.token = localStorage.getItem("token");
        this.getProducts();
    }
    
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>