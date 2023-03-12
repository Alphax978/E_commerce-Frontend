<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="category.imageUrl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{name: 'ListProducts', params: {id: category.id} }">
        <h5 class="card-title">{{ category.categoryName }}</h5>
      </router-link>
      <h1 class="card-text font-italic">
        {{ category.description.substring(0, 65)  }}
      </h1>
      <router-link :to="{name: 'Adminedits'}" >
        <button class="btn btn-primary" type="button" >Edit</button> 
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
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

#edit-category {
  float: right;
}

.card-text{
  font-size: 1.1rem;
}






</style>