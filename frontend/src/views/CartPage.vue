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
          <h5 class="card-title mb-1 px">
            <router-link
               style="text-decoration: none; color: inherit;"
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
              >{{ cartItem.product.name }}
            </router-link>
          </h5>
          <h6 id="item-price" class="mb-0 font-weight-bold">
            $ {{ cartItem.product.price }} per unit
          </h6>
          <h6 id="item-quantity" class="mb-0">
            Quantity :
            <input
              size="1"
              class="p-0 h-25 border-bottom border-top-0 border-left-0 border-right-0"
              v-model="cartItem.quantity"
            />
          </h6>
          <h5 id="item-total-price" class="mb-2">
            Total Price:
            <span class="font-weight-bold">
              $ {{ cartItem.product.price * cartItem.quantity }}</span
            >
          </h5>
          <br />
          <br />
          <button id="df" class="btn btn-primary btn-sm remove" @click="deleteItem(cartItem.id)">
              Remove From Cart
          </button>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>


    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total : ${{ totalCost.toFixed(2) }}</h5>
      <button type="button" class="btn btn-primary confirm" :disabled="isDisabled()" @click="checkout" >
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
    isDisabled(){
      if (this.cartItems.length === 0)
      {
        return true;
     
      }
      return false;
    },
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
      this.$router.push({ name: 'CheckOut' });
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
h5,
h6 {
  font-family: 'Roboto', sans-serif;
  font-size: 700;
  font-weight: bold;
}
.embed-responsive .card-img-top {
  object-fit: cover;
}
#item-price {
  color: #161717;
}
#item-quantity {
  float: left;
  font-weight: bold;
}
#item-total-price {
  float: right;
}
.confirm {
  font-weight: bold;
  font-size: larger;
}
.remove {
  font-weight: bold;
}



</style>