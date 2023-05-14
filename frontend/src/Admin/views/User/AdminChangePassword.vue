<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div class="body flex-grow-1 px-3">

             <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h4 class="pt-3">Change Password</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <form @submit="updateUser">
                            <div class="form-group">
                                <label>Old Password</label>
                                <input type="text" class="form-control" v-model="OldPassword" required/>
                            </div>
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="text" class="form-control" v-model="password" required/>
                            </div>
                            <button  class="btn btn-primary">Submit</button>
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
import axios from 'axios';
import swal from "sweetalert";
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'

export default {
    name:"UsereditProfile",
      components: {
            AppFooter,
            AppHeader,
            AppSidebar,
        },
    props:["baseURL"],
    data()
    {
       return{
           email: null,
            firstName: null,
            lastName: null,
            OldPassword: null,
            password:null,
            alltokens:[],
            alldata:[],
            token:null,
            userid:[],
       }
    },
    methods:{
        getTokens()
        {
            axios
            .get(`${this.baseURL}/backend/token/adshows`)
            .then((res) => (this.alltokens = res.data))
            .catch((err) => console.log(err));
          
        },
        getId() 
        {
            axios
                .get(`${this.baseURL}/backend/token/adshows`)
                .then((res) => 
                {
                    this.alldata = res.data;
                    for (let i = 0; i < this.alldata.length; i++) 
                    {
                        if (this.token == this.alldata[i].token) 
                        {
                            this.userid = this.alldata[i].admin.id;
                            console.log(this.userid);
                            break;
                        }
                    }
                })
                .catch((err) => console.log(err));
        },

        async updateUser(e) {
            e.preventDefault();
               if (this.password.length < 8) 
                    {
                    swal({
                        text: "Password should be at least 8 characters",
                        icon: "info",
                        closeOnClickOutside: false,
                    });
                     return;
                }
                // call signup api
                const user = {
                    password: this.password,
                };
                await axios
                .post(`${this.baseURL}/backend/Admin/updatepass/${this.userid}`, user)
                .then(() => {
                    this.$router.replace("/adminpannel");
                    swal({
                        text: "Your Password has been changed",
                        icon: "success",
                        closeOnClickOutside: false,
                    });

                    
                })
                .catch((error) => {this.error = error});
         
        },
   
    },
    mounted(){
        this.token = localStorage.getItem("token")
        this.getTokens();
        this.getId();
    }
    
}
</script>


<style scoped>
h2 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-image {
  float: right;
  font-weight: 500;
}
</style>