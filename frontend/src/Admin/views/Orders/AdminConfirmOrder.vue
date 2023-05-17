<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Total Ordered Products</h2>
                    </div>
                </div>

            </div>
            <br/>
            <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <!-- <th>Id</th> -->
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price Per Unit</th>
                    <th>Sold at price</th>
                    <th>Product Confirmation By seller</th>
                    <th>Actions</th>
                    <th>Status</th>

                
                </tr>
                
            </thead>
            <tbody>
                <tr v-for="orderItem in orderItems" :key="orderItem.id">
                    <!-- <td>{{orderItem.index}}</td> -->
                    <td>{{orderItem.product.name}}</td>
                    <td>{{orderItem.quantity}}</td>
                    <td>{{orderItem.price}}</td>
                    <td>{{orderItem.price * orderItem.quantity}}</td>
                    <td>{{orderItem.orderStatus}}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" :disabled=" isShipmentDisabled(orderItem.status, orderItem.orderStatus)"  @click="shipmentStarted(orderItem.createdDate)"> Start Shipment</button>
                        |
                        <button class="btn btn-secondary btn-sm" :disabled="isDeliveredDisabled(orderItem.status, orderItem.orderStatus)" @click="Delivered(orderItem.createdDate)">Delivered</button> 
                        |
                        <button class="btn btn-danger btn-sm" :disabled="isCancelDisabled(orderItem.status, orderItem.orderStatus)" @click="Cancel(orderItem.createdDate)">Cancel</button>


                        
                        
                    </td>
                    <td>{{orderItem.status}}</td>
                    <!-- <td><button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td> -->
                </tr>
            </tbody>
            </table>



      </div>
      <AppFooter />
    </div>
  </div>    
</template>

<script>
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
import axios from 'axios';
// import swal from 'sweetalert'
export default {
     components: {
        AppFooter,
        AppHeader,
        AppSidebar,
        // CContainer, 
    },
    data(){
        return{
            orderItems:[],
          
            
         
            
        }
    },
    props:["baseURL"],
    methods:{
        shipmentStarted(date){
            const newitem = {
                status:"Shipment Started",

            }
            axios({
                    method: "Post",
                    url:`${this.baseURL}/backend/order/statusupdate/${date}`,
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

        Delivered(date){
               const newitem = {
                status:"Delivered",

            }
            axios({
                    method: "Post",
                    url:`${this.baseURL}/backend/order/statusupdate/${date}`,
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

        Cancel(date){
               const newitem = {
                status:"Cancelled",

            }
            axios({
                    method: "Post",
                    url:`${this.baseURL}/backend/order/statusupdate/${date}`,
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

        isShipmentDisabled(status, order) {
            if(order === null || order === "Cancelled"){
                return true;
            }
            if(status === "Shipment Started" || status === "Delivered" || status === "Cancelled"){
                return true;
            }

        },

        isDeliveredDisabled(status,order) {
            if(order === null){
                return true;
            }
            if(status === "Delivered"){
                return true;
            }
            if (status != "Shipment Started"){
                return true;
            }
            

        },

         isCancelDisabled(status,order) {
            if(order === null || order === "Cancelled"){
                return true;
            }
            if(status === "Cancelled"){
                return true;
            }
            if(status === "Shipment Started" || status == "Delivered"){
                return true;
            }
            
             
        },



       



        

       


        

        getOrders(){
            axios
                .get(`${this.baseURL}/backend/order/all`)
                .then((res) => {
                    this.orderItems = res.data;
                    console.log(this.orderItems);

                })
                .catch((err) => console.log(err))

        }
    },
    mounted(){
        this.getOrders();
    }
    
}
</script>

<style scoped>
h2 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>