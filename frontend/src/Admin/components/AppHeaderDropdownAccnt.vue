<template>
  <CDropdown variant="nav-item">
  <CDropdownToggle color="primary">   <CAvatar :src="avatar1" size="md" /> Account</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem @click="signout"> <CIcon icon="cil-lock-locked" /> Logout</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
  <!-- <CAvatar :src="avatar" size="md" /> -->
</template>

<script>
import avatar from '../assets/images/avatars/user1.png'
import avatar1 from '../assets/images/avatars/man.png'
import swal from "sweetalert";

export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,avatar1,
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
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      swal({
        text: "Logged you out. Visit again",
        icon: "success",
      });
      this.$router.push({ name: "HomePage" });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
}
</script>
