<template>
<div>
    <NavbarShow />
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Order Id: {{orderID}}</h4>
            </div>
        </div>

        <div v-for="(orderItem, index) in orderItems" :key="index" class="row mt-2 pt-3 justify-content-around">
            <div class="col-1"></div>
            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                <img :src="orderItem.product.imageURL" class="w-100 card-img-top embed-responsive-item">
                <hr/>
            </div>

            <div class="col-md-5 px-3">
                <div class="card-block px-3">
                    <h5 class="card-title" id="cns" >{{orderItem.product.name}}</h5>
                    <p id="item-price" class="mb-0 font-weight-bold">${{orderItem.product.price}} per unit</p>
                    <p id="item-quantity" class="mb-0">Quantity : {{orderItem.quantity}}</p>
                    <p id="item-total-price" class="mb-0">
                        Total Price : $<span class="font-weight-bold">{{ orderItem.price * orderItem.quantity}}</span>
                    </p>
                    <p id="item-quantity" class="mb-0">Payment Method: Card</p>
                    <p id="item-quantity" class="mb-0">Payment Status: successful</p>
                    <br/>
                    <h5>Delivery Status: 
                        <span v-if="orderItem.status == adminshipment">Shipment Started</span> 
                        <span v-if="orderItem.status === null && orderItem.orderStatus == vendorconfirm">Your Order is being Processed</span> 
                        <span v-if="orderItem.status === null && orderItem.orderStatus === null">Your Order is being Processed</span> 
                        <span v-if="orderItem.orderStatus == vendorcancel && orderItem.status === null">Your Order Has been cancelled due to some reasons, You will be refunded</span>

                        <span v-if="orderItem.status == admindeliver" >Your Product has been delivered</span> 
                        <span v-if="orderItem.status == adimincancel">Your Order Has been cancelled due to some reasons, You will be refunded</span> 


                    </h5>
                </div>
            </div>
            <div class="col-1"></div>
        </div>

        <div class="total-cost pt-2 text-right">
            <h5>Total Cost : $ {{order.totalPrice}}</h5>
        </div>
    </div>
    <FooterShow />

</div>
</template>


<script>
import NavbarShow from '../../components/NavbarShow';
import FooterShow from '../../components/FooterShow';
import axios from 'axios';
export default {
    name:'OrderDetails',
    components: {NavbarShow, FooterShow},
    props:["baseURL"],
    data() {
        return {
            orderItems:[],
            order: {},
            token: null,
            orderID: 0,
            vendorcancel:"Cancelled",
            vendorconfirm: "Confirmed || Processing Started",
            admindeliver:"Delivered",
            adimincancel:"Cancelled",
            adminshipment:"Shipment Started"
        }
    },
    methods:{
        getOrder(){
            axios.get(`${this.baseURL}/backend/order/${this.orderID}?token=${this.token}`).then((response) => {
                if(response.status === 200) {
                    this.order = response.data
                    this.orderItems = this.order.orderItems
                }
                },
                (err)=>{
                    console.log(err)
                })
        }
    },
    mounted(){
        this.orderID = this.$route.params.id;
        this.token = localStorage.getItem("token")
        this.getOrder()
    }
}
</script>

<style scoped>
    h6, h5, P {
        font-family: 'Roboto', sans-serif;
        color: #484848;
        font-weight: 700;
    }
    .embed-responsive .card-img-top {
        object-fit: cover;
    }

  
</style>