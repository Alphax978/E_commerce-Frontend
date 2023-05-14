
<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div class="body flex-grow-1 px-3">

            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h4>Add New Product</h4>
                    </div>
                </div>



                <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                <form @submit="addProduct" >
                    <div class="form-group">
                        <label>Category </label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category in categories" :key="category.id"
                                    :value="category.id">{{ category.categoryName }}</option>
                                    <!-- <i class="fas fa-caret-down"></i> -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="name" class="form-control" required >
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" v-model="description" class="form-control" required >
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input type="text"  v-model="imageURL" class="form-control" required >
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" v-model="price" class="form-control" required >
                    </div>
                    <div class="form-group">
                        <label>Stock</label>
                        <input type="number" v-model="stock" class="form-control" required >
                    </div>
                    <button class="btn btn-primary" @click="addProduct">Add Product</button>
                </form>
                </div>
                <div class="col-3"></div>
                </div> 

            </div>

        </div>
      <AppFooter />
    </div>
  </div>
</template>








<script>
    import AppFooter from '../../components/AppFooter.vue'
    import AppHeader from '../../components/AppHeader.vue'
    import AppSidebar from '../../components/AppSidebar.vue'
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
          components: {
            AppFooter,
            AppHeader,
            AppSidebar,
        },
        props: ["baseURL", "categories"],
        data() {
            return {
                id: null,
                categoryId: null,
                name: null,
                description: null,
                imageURL: null,
                price: null,
                stock:null,
                listedtokens:[],
                vendoris:null
            }
        },
        methods: {
            addProduct(e) {
                e.preventDefault();
                const newProduct = {
                    categoryId: this.categoryId,
                    description: this.description,
                    name: this.name,
                    imageURL: this.imageURL,
                    price: this.price,
                    stock: this.stock,
                    sellerId: this.vendoris
                };
                axios.post(`${this.baseURL}/backend/product/add?token=${this.token}`, newProduct)
                .then(() => {
                    swal({
                        text: "Product added",
                        icon: "success"
                    })
                }).catch((err)=> {
                    console.log("err", err);
                })
            },
            getToken(){
                axios
                    .get(`${this.baseURL}/backend/token/showsall`)
                    .then((res) => {
                        this.listedtokens = res.data;
                        console.log(this.listedtokens);
                        for (let i = 0; i < this.listedtokens.length; i++){
                            if (this.token == this.listedtokens[i].token){
                                console.log("found");
                                console.log(this.listedtokens[i].vendor.id);
                                this.vendoris = this.listedtokens[i].vendor.id;
                                console.log("yes" + this.vendoris);
                            }
                        }
                      
                    })
                    .catch((err) => console.log(err));


            },
        },
        mounted(){
            this.token = localStorage.getItem("token");
            this.getToken();
        }





        
    }
</script>


<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>

