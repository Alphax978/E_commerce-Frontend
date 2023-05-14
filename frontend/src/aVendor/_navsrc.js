export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/vendorpannel',
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
    name: 'Manage Products',
    icon: 'cil-Task',
    items: [
      {
        component: 'CNavItem',
        name: 'Add product',
        to: '/vendoradds',
      },
      {
        component: 'CNavItem',
        name: 'View Products',
        to: '/vendorsees',
      },
      {
        component: 'CNavItem',
        name: 'Upload Product Images',
        to: '/vendor/image/add',
      },
      {
        component: 'CNavItem',
        name: 'View Product Images',
        to: '/vendor/image/view',
      },
      {
        component: 'CNavItem',
        name: 'Ordered Products',
        to: '/vendorsold',
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
        to: '/vendorprofile',
      },
      {
        component: 'CNavItem',
        name: 'Change Password',
        to: '/vendor/password',
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
