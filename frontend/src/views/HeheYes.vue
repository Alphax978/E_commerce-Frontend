<template>
    <section>
        <p> hello this is james {{rawal}}</p>
    </section>
</template>


<script>

export default{
    data()
    {
        return {
            rawal:"james"
        }
    },
    method:
    {
        Changes(){
            this.rawal = "ok";
        }
    }
  
}

</script>
