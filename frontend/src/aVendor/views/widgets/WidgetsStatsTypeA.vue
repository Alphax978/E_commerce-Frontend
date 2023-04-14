<template>
  <CRow>


    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="primary">
        <template #value
          >{{product}}
          <span class="fs-6 fw-normal">
            (Present)
          </span>
        </template>
        <template #title>Your Products</template>
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


     
    
  </CRow>
</template>

<script>
import axios from 'axios'
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
        getProducts(){
            axios
                .get(`${this.baseURL}/backend/product/vendorshow/?token=${this.token}`)
                .then((res) => {
                  const result = res.data;
                  this.product = result.productItems.length;
                })
                .catch((err) => console.log(err))
                console.log(this.product)
        },
  },
  mounted(){
    this.token = localStorage.getItem("token")
    this.getProducts();
    this.getCategories();
  }
  
}
//primary,info,warning,danger
</script>
