export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/Adminpannel',
    icon: 'cil-speedometer',
  },
  // {
  //   component: 'CNavTitle',
  //   name: 'Theme',
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  {
    component: 'CNavGroup',
    name: 'Manage Categories',
    icon: 'cil-check',
    items: [
      {
        component: 'CNavItem',
        name: 'Add Category',
        to: '/Adcategory',
        icons: 'cil-puzzle'
      },
      {
        component: 'CNavItem',
        name: 'View Categories',
        to: '/vcategory',
      },
      {
        component: 'CNavItem',
        name: 'Upload Category Image',
        to: '/admin/image/add',
      },
      {
        component: 'CNavItem',
        name: 'View Category Image',
        to: '/admin/image/view',
      },
      // {
      //   component: 'CNavItem',
      //   name: 'Edit Category',
      //   to: '/edcategory',
      // },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Users',
    icon: 'cil-UserFollow',
    items: [
      {
        component: 'CNavItem',
        name: 'View Users',
        to: '/admin/view/users',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Vendors',
    icon: 'cil-people',
    items: [
      {
        component: 'CNavItem',
        name: 'View Vendors',
        to: '/admin/view/vendors',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Profile',
    icon: 'cil-user',
    items: [
      {
        component: 'CNavItem',
        name: 'Edit Profile',
        to: '/Adminprofile',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Order Details',
    icon: 'cil-basket',
    items: [
      {
        component: 'CNavItem',
        name: 'View Orders',
        to: '/admin/order/view',
      },
    ],
  },






  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
