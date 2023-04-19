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
                        <form >
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control" required/>
                            </div>
                             <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control"  required/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control"  required/>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control"  required/>
                            </div>
                            <div class="form-group">
                                <label>Old Password</label>
                                <input type="text" class="form-control" required/>
                            </div>
                            <div class="form-group">
                                <label>New Password</label>
                                <input type="number" class="form-control" required/>
                            </div>
                            <button type="button" class="btn btn-primary"
                                    @click="editProduct" >Submit</button>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>


    <FooterShow />
</div>

</template>

<script>
import NavbarShow from '../components/NavbarShow';
import FooterShow from '../components/FooterShow';
export default {
    name:"UsereditProfile",
    components:{NavbarShow, FooterShow},
    data()
    {
       return{
           email: null,
            firstName: null,
            lastName: null,
            password: null,
            OldPassword: null,
            NewPassword:null,
       }
    },
    methods:{
        
    }
    
}
</script>


<style scoped>

</style>