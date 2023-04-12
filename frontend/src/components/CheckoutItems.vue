<template>
    <div class="container">
            <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> </span></h4>
            <p>{{cartItem.product.name}} <span class="price">{{cartItem.product.price}}</span></p>
            <hr>
            <p>Total <span class="price" style="color:black"><b>${{totalCost.toFixec(2)}}</b></span></p>
    </div>
</template>

<script>
export default {
    name:"CheckoutItem",
    props:["cartItems"],
}
</script>