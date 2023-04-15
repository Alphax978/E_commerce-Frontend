<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imageURL"
        alt="Product Image"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }"
        ><h5 class="card-title">{{ product.name }}</h5></router-link
      >
      <h1 class="card-text"><sup>Rs.</sup>{{ product.price }}</h1>
      <h1 class="card-text font-italic">
        {{ product.description.substring(0, 65) }}...
      </h1>
      <div v-for="wishItem in wishItems" :key="wishItem.id">
        <a href="#" class="text-right" @click="deleteWish(wishItem.id)" >
              Remove From WishList
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ProductBox",
  props: ["product"],
  data(){
    return{
        baseURL: "http://localhost:8084/backend/wishlist",
        wishItems:[],


    }
  },
  methods: {
    showDetails() {
      this.$router.push({
        name: "ShowDetails",
        params: { id: this.product.id },
      });
    },
    getWish() {
      axios
        .get(`${this.baseURL}/gets/${this.token}`)
        .then((res) => (this.wishItems = res.data))
        .catch((err) => console.log(err))
        console.log(this.wishItems);
    },

    deleteWish(wishid){
      axios
        .delete(`${this.baseURL}/delete/${wishid}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => console.log('err', err));
        
    }
  },
  mounted(){
    this.token = localStorage.getItem("token");
    this.getWish();
  }
};
</script>

<style scoped>
.embed-responsive .card-img-top {
  object-fit: cover;
}

a {
  text-decoration: none;
}

.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}

.card-title:hover {
  font-weight: bold;
}

.card-text {
  font-size: 1.1rem;
}


</style>