<template>
  <CDropdown variant="nav-item">
      <CDropdownToggle color="primary">   <CAvatar :src="avatar1" size="md" /> Account</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem @click="signout"> <CIcon icon="cil-lock-locked" /> Logout</CDropdownItem>
      </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '../assets/images/avatars/user1.png'
import avatar1 from '../assets/images/avatars/businessman.png'
import swal from "sweetalert";
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      avatar1: avatar1,
      itemsCount: 42,
    }
  },
  props: ["cartCount"],
  data() {
    return {
      token: null,
    };
  },
  methods: {
    // beforeUnload(){
    //   this.browserLogout();
    // },
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      swal({
        text: "Logged you out. Visit again",
        icon: "success",
      });
      this.$router.push({ name: "HomePage" });
    },
    // browserLogout(){
    //   localStorage.removeItem("token");
    //   this.token = null;
    // },
  },
  mounted() {
    // window.addEventListener('beforeunload', this.beforeUnload);
    this.token = localStorage.getItem("token");
  },
  // beforeUnmount() {
  //   window.removeEventListener('beforeunload', this.beforeUnload);
  // },
}
</script>
