<template>

  <div>
      <div class="flex justify-between px-4 mt-4 sm:px-8">
        <h2 class="text-2xl text-gray-600">Dashboard</h2>

        <div class="flex items-center space-x-1 text-xs">
          <a href="#" class="font-bold text-indigo-700">Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-600">Dashboard</span>
        </div>
      </div>




    <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Total Member</h3>
        <p class="text-3xl">12,768</p>
      </div>
    </div>

    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Total Post</h3>
        <p class="text-3xl">39,265</p>
      </div>
    </div>

    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-indigo-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Total Comment</h3>
        <p class="text-3xl">142,334</p>
      </div>
    </div>

    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
      <div class="p-4 bg-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Server Load</h3>
        <p class="text-3xl">34.12%</p>
      </div>
    </div>
  </div>




  </div>
</template>

<script>
// import VueApexCharts from 'vue3-apexcharts'
// import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
// import topAuthors from '@/data/home/topAuthors.json'
// import recentSales from '@/data/home/recentSales.json'

export default {
  components: {
    // apexchart: VueApexCharts,
    // TabGroup,
    // TabList,
    // Tab,
    // TabPanels,
    // TabPanel,
  },

  setup() {
    // const pageViewOptions = {
    //   chart: {
    //     id: 'pageview-chart',
    //     toolbar: {
    //       show: false,
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   xaxis: {
    //     categories: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'],
    //   },
    // }

    // const pageViewSeries = [
    //   {
    //     name: 'Page view',
    //     data: [3087, 4403, 3456, 2864, 4956, 6023, 7063],
    //   },
    // ]

    // const sessionsOptions = {
    //   chart: {
    //     id: 'sessions-chart',
    //   },
    //   labels: ['Desktop', 'Mobile', 'Tablet'],
    //   legend: {
    //     position: 'bottom',
    //   },
    // }

    // const sessionsSeries = [70.9, 27.2, 1.9]

    // return {
    //   pageViewOptions,
    //   pageViewSeries,
    //   sessionsOptions,
    //   sessionsSeries,
    //   topAuthors,
    //   recentSales,
    // }
  },
}
</script>
