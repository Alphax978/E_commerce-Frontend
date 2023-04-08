<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div class="body flex-grow-1 px-3">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h4 class="pt-3"> Edit Product</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <form v-if="product">
                                <div class="form-group">
                                    <label> Category</label>
                                    <select class="form-control" v-model="product.categoryId" required>
                                        <option v-for="category of categories"
                                                :key="category.id"
                                                :value="category.id"> {{category.categoryName}}</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="product.name" required/>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="product.description" required/>
                                </div>
                                <div class="form-group">
                                    <label>Image URL</label>
                                    <input type="text" class="form-control" v-model="product.imageURL" required/>
                                </div>
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="number" class="form-control" v-model="product.price" required/>
                                </div>
                                <button type="button" class="btn btn-primary"
                                        @click="editProduct" >Submit</button>
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
    import axios from 'axios'
    import swal from 'sweetalert'
    import AppFooter from '../../components/AppFooter.vue'
    import AppHeader from '../../components/AppHeader.vue'
    import AppSidebar from '../../components/AppSidebar.vue'
    export default {
        components: {AppFooter,AppHeader,AppSidebar},
        data() {
            return {
                product: null,
                id: null
            }
        },
        props: ["baseURL", "categories", "products"],
        methods: {
            async editProduct() {
                console.log('product', this.product)
                await axios.post(`${this.baseURL}/backend/product/update/${this.id}`,
                    this.product)
                    .then(() => {
                        this.$emit("fetchData");
                        this.$router.push({name: 'VendorLayout'})
                        swal({
                            text: "product has been updated successfully",
                            icon: "success"
                        })
                    }).catch(err => console.log('err', err));
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.product = this.products.find(product => product.id == this.id)
        }
    }
</script>