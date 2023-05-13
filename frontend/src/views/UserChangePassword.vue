<template>
<div>
    <NavbarShow />
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h4 class="pt-3">Edit Your Profile</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <form @submit="updateUser">
                            <div class="form-group">
                                <label for="password">Old Password</label>
                                <input type="password" class="form-control" v-model="OldPassword" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">New Password</label>
                                <input type="password" class="form-control" v-model="password" required/>
                            </div>
                            <button  class="btn btn-primary">Submit</button>
                        </form>

             
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>

           




    <FooterShow />
</div>

</template>

<script>
import axios from 'axios';
import NavbarShow from '../components/NavbarShow';
import FooterShow from '../components/FooterShow';
import swal from "sweetalert";

export default {
    name:"UsereditProfile",
    components:{NavbarShow, FooterShow},
    props:["baseURL"],
    data()
    {
       return{
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
            .get(`${this.baseURL}/backend/token/show`)
            .then((res) => (this.alltokens = res.data))
            .catch((err) => console.log(err));
          
        },
        getId() 
        {
            axios
                .get(`${this.baseURL}/backend/token/show`)
                .then((res) => 
                {
                    this.alldata = res.data;
                    for (let i = 0; i < this.alldata.length; i++) 
                    {
                        if (this.token == this.alldata[i].token) 
                        {
                            this.userid = this.alldata[i].user.id;
                            console.log(this.userid);
                            break;
                        }
                    }
                })
                .catch((err) => console.log(err));
        },

        async updateUser(e) {
            e.preventDefault();
                // call signup api
                if (this.password.length < 8) 
                    {
                    swal({
                        text: "Password should be at least 8 characters",
                        icon: "info",
                        closeOnClickOutside: false,
                    });
                     return;
                }
                const user = {
                    password: this.password,
                };
                await axios
                .post(`${this.baseURL}/backend/user/updatepass/${this.userid}`, user)
                .then(() => {
                    this.$router.replace("/");
                    swal({
                        text: "Password Changed",
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

</style>