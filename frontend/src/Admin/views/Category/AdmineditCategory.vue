<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div class="body flex-grow-1 px-3">

                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h4 class="pt-3"> Edit Category</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6">
                            <form v-if="category">
                                <div class="form-group">
                                    <label>Category Name</label>
                                    <input type="text" class="form-control"
                                        v-model="category.categoryName"  required/>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control"
                                        v-model="category.description"  required/>
                                </div>
                                <div class="form-group">
                                    <label>Image URL</label>
                                    <input type="text" class="form-control"
                                        v-model="category.imageUrl"  required/>
                                </div>
                                <button type="button" class="btn btn-primary" @click="editCategory" >Submit</button>
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
                category: null,
                id: null,
            };
        },
        props: ["baseURL", "categories","products"],
        methods: {
            async editCategory() {
                delete this.category["products"]
                console.log('category', this.category)
                await axios.post(`${this.baseURL}/backend/category/update/${this.id}`,this.category)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({name: 'View categories'})
                    swal({
                        text: "category has been updated successfully",
                        icon: "success"
                    })
                }).catch(err => console.log('err', err));
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id)
        }
    }
</script>

<style scoped>
    a{
        list-style: none;
        text-decoration: none;
    }
</style>