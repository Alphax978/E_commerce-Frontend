<template>
<div>
  <NavbarShow/>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" :alt="product.name" class="img-fluid" />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h4 class="font-weight-bold">$ {{ product.price }}</h4>
        <h5>
          {{ product.description }}
        </h5>
        <h6 class="font-weight-bold">Total Available: {{ product.stock }}</h6>


        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend" >
              <div>
                <span id="io">Quantity: </span>
                <button @click="decrement">-</button>
                <input class="ir" type="number" v-model="quantity">
                <button @click="increment">+</button>
              </div>
            </div>
            <!-- <input class="form-control" type="number"  v-model="quantity" /> -->

          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button
              type="button"
              id="add-to-cart-button"
              class="btn"
              @click="addToCart(this.id)"
            >
              Add to Cart
              <ion-icon name="cart-outline" v-pre></ion-icon>
            </button>
          </div>
        </div>

        <div class="features pt-3">
          <h5><strong>More Info</strong></h5>
          <ul>
            <li>{{product.description}}</li>
            <li>Product from a Well-known and reputed company.</li>
            <li>Product Listed by verified seller.</li>
          </ul>
        </div>
        <br/>

        <button
          id="wishlist-button"
          class="btn mr-3 p-1 py-0"
          :class="{ product_added_wishlist: isAddedToWishlist }"
          @click="addToWishList(this.id)"
        >
          {{ wishlistString }}
        </button>
        <button
          id="show-cart-button"
          type="button"
          class="btn mr-3 p-1 py-0"
          @click="listCartItems()"
        >
          Show Cart

          <ion-icon name="cart-outline" v-pre></ion-icon>
        </button>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</div>
</template>


<script>

import NavbarShow from '../../components/NavbarShow';
// import FooterShow from '../../components/FooterShow';
import axios from "axios";
import swal from "sweetalert";

export default {
  components:{NavbarShow},
  data() {
    return {
      product: {},
      category: {},
      id: null,
      token: null,
      isAddedToWishlist: false,
      wishlistString: "Add to wishlist",
      quantity:1,
      error:"",
      cartItems:[],
      
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    addToWishList(productId) {
      if (!this.token) {
        swal({
          text: "Please log in first!",
          icon: "error",
        });
        return;
      }
      axios
        .post(`${this.baseURL}/backend/wishlist/add?token=${this.token}`, {
          id: productId,
        })
        .then(
          (response) => {
            if (response.status == 201) {
              this.isAddedToWishlist = true;
              this.wishlistString = "Added to WishList";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    addToCart(productId) {
      if (!this.token) {
        swal({
          text: "Please log in first!",
          icon: "error",
        });
        return;
      }
      if (this.quantity <= 0){
        swal({
                text: "Please Select Appropriate quantity",
                icon: "error",
                closeOnClickOutside: false,
              });
              return;
      }
      let existingItem = this.cartItems.find(item => item.product.id == productId);
      if (existingItem) {
          // Update the quantity of the existing item
          existingItem.quantity += this.quantity;
          axios
            .put(`${this.baseURL}/backend/cart/update?token=${this.token}`, {
              id: existingItem.id,
              quantity: existingItem.quantity,
              productId: existingItem.product.id
            })
            .then((response) => {
              if (response.status === 200) {
                swal({
                  text: "Product Added to the cart!",
                  icon: "success",
                  closeOnClickOutside: false,
                });
              }
            })
            
            .catch((error) => {
              this.error = error;
              if (this.error) {
                swal({
                  text: "Error updating product quantity in cart",
                  icon: "error",
                });
              }
            });
      }
      else 
      {
         axios
        .post(`${this.baseURL}/backend/cart/add?token=${this.token}`, {
          productId: productId,
          quantity: this.quantity,
          pname:this.product.name,
          imageurl:this.product.imageURL
        })
        .then(
          (response) => {
            if (response.status == 201) {
              swal({
                text: "Product Added to the cart!",
                icon: "success",
                closeOnClickOutside: false,
              }).then(() => {
                 location.reload();
              });
            }
          },          
        )
        .catch((error) => 
        {
          this.error = error
            if (this.error){
              swal({
                text:"Please select the quantity",
                icon:"error"
              })
            }
        })

      }
    },
    listCartItems() {
      if (!this.token) {
        swal({
          text: "Please log in first!",
          icon: "error",
        });
        return;
      }
      axios.get(`${this.baseURL}/backend/cart/?token=${this.token}`).then(
        (response) => {
          if (response.status === 200) {
            this.$router.push("/cart");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },

    totalCartItems(){
        axios.get(`${this.baseURL}/backend/cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data
          this.cartItems = result.cartItems;
          console.log(this.cartItems);
        })
        .catch((err) => console.log(err));


    },
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    }
   
  },
 
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
    this.totalCartItems();

  },
};
</script>

<style scoped>
.category {
  font-weight: 400;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
#add-to-cart-button {
  background-color: #febd69;
}
#wishlist-button {
  background-color: #b9b9b9;
  border-radius: 0;
}
#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}

.ir{
  width: 25px;
}

#io{
  font-weight: bold;
}

h4,
h5,
h6,
p,
li {
  font-family: 'Roboto', sans-serif;
  font-size: 700;
  font-weight: bold;
}

</style>