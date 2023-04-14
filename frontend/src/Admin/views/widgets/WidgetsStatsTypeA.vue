<template>
  <CRow>


    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="primary">
        <template #value
          >{{category.length}}
          <span class="fs-6 fw-normal">
            (Present)
          </span>
        </template>
        <template #title>Total Categories</template>
        <template #action>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
   



       <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="info">
        <template #value
          >{{product.length}}
          <span class="fs-6 fw-normal">
            (Present )
          </span>
        </template>
        <template #title>Total Products</template>
        <template #action>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>


        <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="warning">
        <template #value
          >{{users.length}}
          <span class="fs-6 fw-normal">
            (Present )
          </span>
        </template>
        <template #title>Total Users</template>
        <template #action>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>


        <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="danger">
        <template #value
          >{{vendor.length}}
          <span class="fs-6 fw-normal">
            (Present )
          </span>
        </template>
        <template #title>Total Vendors</template>
        <template #action>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    
  </CRow>
</template>

<script>
const axios = require("axios");
import { CChart } from '@coreui/vue-chartjs'
export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
  data(){
    return{
        category: [],
        product:[],
        users:[],
        vendor:[],
        baseURL: 'http://localhost:8084',
    };

  },
  methods:{

  
      async getCategories(){
            await axios
                .get(`${this.baseURL}/backend/category/show`)
                .then((res) => (this.category = res.data ))
                .catch((err) => console.log(err))
        },
        async getProducts(){
            await axios
                .get(`${this.baseURL}/backend/product/showun`)
                .then((res) => (this.product = res.data ))
                .catch((err) => console.log(err))
        },
        async getUsers(){
            await axios
                .get(`${this.baseURL}/backend/user/reflect`)
                .then((res) => (this.users = res.data ))
                .catch((err) => console.log(err))
        },
        async getVendors(){
            await axios
                .get(`${this.baseURL}/backend/Vendor/vreflect`)
                .then((res) => (this.vendor = res.data ))
                .catch((err) => console.log(err))
        },
      
      
      
      
  },

 
  mounted()
  {
    this.getCategories();
    this.getProducts();
    this.getUsers();
    this.getVendors();
  }
}
//primary,info,warning,danger
</script>
