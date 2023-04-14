<template>
<div>
<NavbarShow/>
<br/>
    <!-- <div class="container">
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
                    <th>heeh</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem.product.id" >
                    <td>{{cartItem.product.name}}</td>
                    <td>{{cartItem.product.description}}</td>
                    <td>{{cartItem.quantity}}</td>
                    <td>{{cartItem.product.price}}</td>
                    <td>{{cartItem.product.stock}}</td>
                </tr>
            </tbody>
        </table>

        <div class="total-cost pt-2 text-right">
            <h5>Total : Rs.{{ totalCost.toFixed(2) }}</h5>
            <button  type="button" class="btn btn-dark confirm mr-3 " @click="cart">
                Back to Cart
            </button>
            <button type="button" id="cla" class="btn btn" @click="placeOrder"> <img :src="paypal" width="27"/>
                Pay with PayPal
            </button>
        </div>

    </div>  -->

    <div class="row">

    <div class="col-75">
        <div class="container">
            <form>
                <div class="col-50">
                    <h3>Payment</h3>
                    <label>Accepted Cards</label>
                    <div class="icon-container">
                        <i class="fa fa-cc-visa" style="color:navy;"></i>
                        <i class="fa fa-cc-amex" style="color:blue;"></i>
                        <i class="fa fa-cc-mastercard" style="color:red;"></i>
                        <i class="fa fa-cc-discover" style="color:orange;"></i>
                    </div>
                    <label for="price">Total</label>
                    <input type="text" id="price" name="price" value="10">
                    <label for="currency">Currency</label>
                    <input type="text" id="currency" name="currency" placeholder="Enter Currency" value="USD">
                    <label for="method">Payment Method</label>
                    <input type="text" id="method" name="method" placeholder="Payment Method" value="PayPal">
                    <label for="intent">Intent</label>
                    <input type="text" id="intent" name="intent" value="Buy">
                    <label for="description">Payment Description</label>
                    <input type="text" id="description" name="description" placeholder="Payment Description">

                </div>

                <input type="submit" value="Continue to checkout" class="btn">
            </form>
        </div>
    </div>

    <div class="col-25" >
       <div class="container">
            <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> </span></h4>
            <div v-for="cartItem in cartItems" :key="cartItem.product.id">
              <p>{{cartItem.product.name}} <span class="price">{{cartItem.product.price}}</span></p>
              <hr>
            </div>
            <p>Total <span class="price" style="color:black"><b>${{totalCost.toFixed(2)}}</b></span></p>
    </div>
     
    </div>
</div>
<FooterShow />
</div>

</template>

<script>
import axios from 'axios';
import NavbarShow from '../../components/NavbarShow'
import FooterShow from '../../components/FooterShow'

import paypal from '../../assets/paypal.png'
// import KhaltiCheckout from "khalti-checkout-web";



export default {
    components:{NavbarShow, FooterShow},
    setup(){
      return{
        paypal:paypal,
      }
    },
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
            quantity:null,
            productquantity:[],

        };
    },
  name: 'PaymentPage',
  props: ['baseURL','products'],
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
       

    
    },
    placeOrder() {
      // make an API call to update the stock levels of the products
      this.cartItems.forEach(item => {
        axios.put(`${this.baseURL}/backend/product/order`, { 
          stock: item.product.stock - item.quantity 
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      });
    }

  


   
  
   

  },
  mounted(){
    this.token = localStorage.getItem('token');
    this.getAllItems();
   
  }
    
}
</script>

<style scoped>


.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196F3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}




</style>