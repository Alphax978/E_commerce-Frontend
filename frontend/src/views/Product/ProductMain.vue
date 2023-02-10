<template>
<div>
    <NavbarShow/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4> Our Products</h4>
            </div>
        </div>
        <div class="row">
<!--            display all the products in productbox component-->
            <div v-for="product of products" :key="product.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"/>
            </div>
        </div>
    </div>
    <FooterShow/>
</div>
</template>
<script>
    import ProductBox from "../../components/ProductBox";
    import NavbarShow from '../../components/NavbarShow';
    import FooterShow from '../../components/FooterShow';
    export default {
        components: {ProductBox,NavbarShow,FooterShow},
        props:["products"]
    }
</script>