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
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Users',
    to: '/forms',
    icon: 'cil-UserFollow',
    items: [
      {
        component: 'CNavItem',
        name: 'View Users',
        to: '/forms/form-control',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Gallery',
    to: '/icons',
    icon: 'cil-Grid',
    items: [
      {
        component: 'CNavItem',
        name: 'Product Image',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Profile',
    to: '/notifications',
    icon: 'cil-User',
    items: [
      {
        component: 'CNavItem',
        name: 'Logout',
        to: '/',
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