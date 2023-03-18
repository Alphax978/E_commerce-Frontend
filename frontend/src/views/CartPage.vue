<template>
<div>
  <NavbarShow />
    <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Shopping cart</h4>
      </div>
    </div>
    <!--    loop over all the cart items and display one by one-->
    <div
      v-for="cartItem in cartItems"
      :key="cartItem.product.id"
      class="row mt-2 pt-3 justify-content-around"
    >
      <div class="col-2"></div>
      <!-- display image -->
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <router-link
          :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
        >
          <img
            v-bind:src="cartItem.product.imageURL"
            class="w-100 card-img-top embed-responsive-item"
          />
        </router-link>
      </div>
      <!-- display product name, quantity and price -->
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h4 class="card-title mb-3">
            <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
              >{{ cartItem.product.name }}
            </router-link>
          </h4>
          
          <p id="item-price" class="mb-0 font-weight-bold">
            Rs {{ cartItem.product.price }} per unit
          </p>
          <p id="item-quantity" class="mb-0">
            Quantity :
            <input
              size="1"
              class="p-0 h-25 border-bottom border-top-0 border-left-0 border-right-0"
              v-model="cartItem.quantity"
            />
          </p>
          <p id="item-total-price" class="mb-2">
            Total Price:
            <span class="font-weight-bold">
              Rs {{ cartItem.product.price * cartItem.quantity }}</span
            >
          </p>
          <br /><a href="#" class="text-right" @click="deleteItem(cartItem.id)">
              Remove From Cart
            </a>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>


    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total : Rs.{{ totalCost.toFixed(2) }}</h5>
      <button type="button" class="btn btn-primary confirm" @click="checkout">
        Confirm order
      </button>
    </div>
  </div>
  <FooterShow />
</div>
</template>
<script>
import axios from 'axios';
import NavbarShow from '../components/NavbarShow';
import FooterShow from '../components/FooterShow';
export default {
  components:{NavbarShow,FooterShow},
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
    };
  },
  props: ['baseURL'],
  methods: {
    // fetch All items in cart
    listCartItems() {
      axios
        .get(`${this.baseURL}/backend/cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => console.log('err', err));
    },
    deleteItem(itemId) {
      axios
        .delete(`${this.baseURL}/backend/cart/delete/${itemId}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => console.log('err', err));
    },
    checkout() {
      this.$router.push({ name: 'Payment' });
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.listCartItems();
  },
};
</script>
<style scoped>
h4,
h5 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-size: 700;
}
.embed-responsive .card-img-top {
  object-fit: cover;
}
#item-price {
  color: #232f3e;
}
#item-quantity {
  float: left;
}
#item-total-price {
  float: right;
}
.confirm {
  font-weight: bold;
  font-size: larger;
}
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:active { text-decoration: none; }
</style>