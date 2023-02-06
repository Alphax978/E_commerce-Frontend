/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
      "./src/Admin/components/layouts/TheFooter.vue",
      "./src/Admin/components/layouts/TheHeader.vue",
      "./src/Admin/components/layouts/TheSidebar.vue",
      "./src/Admin/views/DashboardShows.vue",
      "./src/Admin/views/dashboard/DashboardHome.vue",
  ],
  prefix:'tw-',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'Sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

