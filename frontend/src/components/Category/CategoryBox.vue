<template>
    <!-- bootstrap cards  -->
    <div class = "card w-100 h-100 " style="margin-top: 10px">
        <div class="embed-responsive embed-responsive-16by9">
            <img src="category.imageUrl" class="card-img-top embed-responsive-item" alt="card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">{{ category.description }}</p>
            <a href="#" class="btn btn-primary">Edit</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "CategoryBox",
    props: ['category'],//may need to change the [content]
    methods: {

    },
   
};
</script>

<style scoped>
    .card-img-top{
        object-fit: cover ;
    }
</style>
