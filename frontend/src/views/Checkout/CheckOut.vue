<template>
  <div class="div_class">
    <h3>You will be redirected to payment page</h3>
    <br>
    <button id="in" class="btn btn-primary" @click="goToCheckout">Make Payment</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      stripeAPIToken: 'pk_test_51MmF6RFDAh6fGqd2p8yTiLU7TjAwo6di9VCnscnsMGdMGEfEOV3e7v84zDOG5UWKklHHAW4QrRDV6no9LlIvtA3A001WxFXP92',
      stripe: '',
      token: null,
      checkoutBodyArray: [],
    };
  },
  name: 'CheckOut',
  props: ['baseURL'],
  methods: {
    getAllItems() {
      axios
        .get(`${this.baseURL}/backend/cart/?token=${this.token}`)
        .then((response) => {
          if (response.status == 200) {
            let products = response.data;
            console.log(products);
            for (let i = 0; i < products.cartItems.length; i++) {
              this.checkoutBodyArray.push({
                imageUrl: products.cartItems[i].product.imageURL,
                price: products.cartItems[i].product.price,
                quantity: products.cartItems[i].quantity,
                productName: products.cartItems[i].product.name,
                productId: products.cartItems[i].product.id,
                userId: products.cartItems[i].userId,
                sellerid: products.cartItems[i].product.sellerId,
              });
            }
            
          }
        })
        .catch((err) => console.log(err));
    },
    goToCheckout() {
      console.log('checkoutBodyArray', this.checkoutBodyArray);
      axios
        .post(
          `${this.baseURL}/backend/order/create-checkout-session`,
          this.checkoutBodyArray
        )
        .then((response) => {
          localStorage.setItem('sessionId', response.data.sessionId);
          console.log('session', response.data);
          this.stripe.redirectToCheckout({
            sessionId: response.data.sessionId,
          });
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.stripe = window.Stripe(this.stripeAPIToken);
    this.getAllItems();
  },
};
</script>
<style scoped>
.alert {
  width: 50%;
}
.div_class {
  margin-top: 5%;
  margin-left: 30%;
}
.checkout_button {
  background-color: #5d3dec;
  margin: 10px;
}

#in{
  margin-left: 20%;
}
</style>