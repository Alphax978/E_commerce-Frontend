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
      <!-- <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }" > 
        <h5 class="card-title">{{ product.name }}</h5> 
      </router-link> -->
      <h5 class="card-title">{{ product.name }}</h5>
      <h1 class="card-text"><sup>$</sup>{{ product.price }}</h1>
      <h1 class="card-text font-italic">
        {{ product.description}}...
      </h1>
      <button class="btn btn-primary" @click="showDetails">show details</button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
  methods: {
    showDetails() {
      this.$router.push({
        name: "ShowDetails",
        params: { id: this.product.id },
      });
    },
  },
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