<template>
<div>
<NavbarShow/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Your Confirmed Products</h4>
            </div>
         </div>
         <br>
        <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem.product.id">
                    <td>{{cartItem.product.name}}</td>
                    <td>{{cartItem.product.description}}</td>
                    <td>{{cartItem.quantity}}</td>
                    <td>{{cartItem.product.price}}</td>
                </tr>
            </tbody>
        </table>

        <div class="total-cost pt-2 text-right">
            <h5>Total : Rs.{{ totalCost.toFixed(2) }}</h5>
            <button  type="button" class="btn btn-dark confirm mr-3 " @click="cart">
                Back to Cart
            </button>
            <button type="button" class="btn btn-success confirm" @click="pay">
                Pay With Khalti
            </button>
        </div>

    </div> 



</div>
</template>

<script>
import axios from 'axios';
import NavbarShow from '../../components/NavbarShow'
// import KhaltiCheckout from "khalti-checkout-web";


export default {
    components:{NavbarShow},
    data() 
    {
        return {   
            token: null,
            cartItems: [],
            totalCost:0,
            returnUrl: 'http://localhost:8080/cart',
            websiteUrl: 'http://localhost:8080',
            amount: 100,
            purchaseOrderId: 'test12',
            purchaseOrderName: 'test',
        };
    },
  name: 'PaymentPage',
  props: ['baseURL'],
  methods: {
    getAllItems() {
      axios
        .get(`${this.baseURL}/backend/cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => console.log('err', err));
    },

    cart(){
        this.$router.push({name: "Cart"})
    },
    
    pay()
    {
  
   
    
    
    }
  
   

  },
  mounted(){
    this.token = localStorage.getItem('token');
    this.getAllItems();

  }
    
}
</script>

<style scoped>
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:active { text-decoration: none; }

#hess{

}






</style>