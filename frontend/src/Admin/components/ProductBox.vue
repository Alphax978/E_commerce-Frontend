<template>
    <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
            <img
                class="card-img-top embed-responsive-item"
                :src="product.imageURL"
                alt="Card image cap"
            />
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <h1 class="card-text">
                {{ product.description.substring(0, 65) }}...
            </h1>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ProductBox",
        props: ["product"]
    }
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
    a {
        text-decoration: none;
    }
    .card-title {
        color: #484848;
    }

    .card-text{
        font-size: 1.1rem;
    }
</style>ss