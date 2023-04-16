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
            <form >
                <div class="col-50">
                    <h3>Payment</h3>
                    <div class="icon-container">
                        <i class="fa fa-cc-visa" style="color:navy;"></i>
                        <i class="fa fa-cc-amex" style="color:blue;"></i>
                        <i class="fa fa-cc-mastercard" style="color:red;"></i>
                        <i class="fa fa-cc-discover" style="color:orange;"></i>
                    </div>
                    <label for="price">Total</label>
                    <input type="text" id="price" name="price" v-model="totalCost"  required>
                    <label for="currency">Currency</label>
                    <input type="text" id="currency" name="currency" placeholder="USD"  v-model="USD" required>
                    <label for="method">Payment Method</label>
                    <input type="text" id="method" name="method" placeholder="PayPal" v-model="paymentmethod" required >
                    <label for="intent">Intent</label>
                    <input type="text" id="intent" name="intent" placeholder="buy" v-model="intent" required>
                    <label for="description">Payment Description</label>
                    <input type="text" id="description" name="description" placeholder="Payment Description" v-model="paymentdescription" required>

                </div>

                <input type="submit" value="Continue to checkout" class="btn" @click="pays">
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
// import swal from 'sweetalert'




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
            quantity:null,
            productquantity:[],
            USD:null,
            paymentmethod:null,
            intent:null,
            paymentdescription:null,





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

    Pays(){
      const newPayment = {
                    price: this.totalCost,
                    currency: this.USD,
                    intent: this.intent,
                    method: this.paymentmethod,
                    description: this.paymentdescription,
                };
      axios
        .post(`${this.baseURL}/backend/pays/pay`, newPayment)
        .then(response => {
        // Redirect the user to the PayPal portal
          window.location.href = response.data.approvalUrl;
        })
        .catch(error => {
        // Handle the error
          console.error(error);
        });
    },

    postItems() {
      axios.get(`${this.baseURL}/backend/cart/?token=${this.token}`).then(
        (response) => {
          if (response.status == 200) {
            let products = response.data;
            let len = Object.keys(products.cartItems).length;
            for (let i = 0; i < len; i++)
              this.checkoutBodyArray.push({
                imageUrl: products.cartItems[i].product.imageURL,
                productName: products.cartItems[i].product.name,
                quantity: products.cartItems[i].quantity,
                price: products.cartItems[i].product.price,
                productId: products.cartItems[i].product.id,
                userId: products.cartItems[i].userId,
                stock: products.cartItems[i].stock,
              });
          }
        },
        (err) => {
          console.log(err);
        }
      );
    },

    cart(){
        this.$router.push({name: "Cart"})
    },
    
    pay()
    {
       

    
    },
 

  


   
  
   

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