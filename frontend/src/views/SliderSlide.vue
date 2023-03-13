<template>
  <div class="slider">
    <img :src="currentImage" />
    <h3>{{ currentText }}</h3>
    <p>{{nxt}}</p>
    <a class="prev" @click="prevImage" href="#">&#10094; Previous</a>
    <a class="next" @click="nextImage" href="#">&#10095; Next</a>
  </div>
</template>

<script>


export default {
  data() {
    return {
      images: [
        { src: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg', text: 'Start Shopping' , nxt:'We Offer you with High Quality Goods and Services. All the products listed on this website are legit and the owners are legit too.'},
        { src: 'https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_960_720.jpg', text: 'Start Shopping',nxt:'We Offer you with High Quality Goods and Services. All the products listed on this website are legit and the owners are legit too.' },
        { src: 'https://cdn.pixabay.com/photo/2017/03/21/20/47/shopping-2163323__340.jpg', text: 'Start Shopping',nxt:'We Offer you with High Quality Goods and Services. All the products listed on this website are legit and the owners are legit too.' }
      ],
      currentIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex].src
    },
    currentText() {
      return this.images[this.currentIndex].text
    },
    nxt(){
        return this.images[this.currentIndex].nxt
    }
  },

  mounted() {
    this.startSlider();
  },


  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },

    startSlider() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000); // change the image every 3 seconds
    },
  }
}
</script>
<style scoped>
.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width:100%;
  overflow: hidden;
  visibility: visible;
}

img {
  height:665px;
  width:100%;
  object-fit: cover;
  transition: all 0.5s ease;
}
h3 {
  position: absolute;
  top: 15%;
  left:32%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  padding: 8px 8px;
  border-radius: 6px;
  color: #febd69 !important;
  
}

p {
  position: absolute;
  top: 30%;
  left: 47%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  padding: 8px 8px;
  border-radius: 6px;
  background-color: #343a40!important;
  color: #fff!important
  
}


.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: #febd69;;
}


</style>



