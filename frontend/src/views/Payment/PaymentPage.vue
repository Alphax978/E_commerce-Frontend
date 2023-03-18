<template>
<div>
<NavbarShow/>
    <div class="container">
        <div class="row mb-18">
            <div class="col-12 text-center">
                <h4 class="pt-3">Your Products</h4>
            </div>
         </div>
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
    </div> 



</div>
</template>

<script>
import axios from 'axios';
import NavbarShow from '../../components/NavbarShow'
export default {
    components:{NavbarShow},
    data() 
    {
        return {   
            token: null,
            cartItems: [],
            totalCost:0
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


  },
  mounted(){
    this.token = localStorage.getItem('token');
    this.getAllItems();

  }
    
}
</script>

<style scoped>

</style>