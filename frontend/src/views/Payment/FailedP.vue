<template>
  <div class="text-center">
    <h1>Failed</h1>
  </div>
</template>

<script>
export default {
    name:'FailedPayment',
    mounted(){
        localStorage.removeItem("sessionId")
        window.location.href = '/order'
    }
}
</script>