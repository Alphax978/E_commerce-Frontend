<template>
  <div class="slider">
    <img :src="currentImage" />
    <h3 >{{ currentText }}</h3>
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
        { src: 'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg', text: 'Start Shopping',nxt:'High Quality Goods and Services at your door step' },
        { src: 'image2.jpg', text: 'Start Shopping' , nxt:'High Quality Goods and Services at your door step'},
        { src: 'image3.jpg', text: 'Start Shopping',nxt:'High Quality Goods and Services at your door step' }
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

<style>
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
  height:600px;
  width:100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

h3 {
  position: absolute;
  top: 15%;
  left: 15%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: White;
  padding: 8px 8px;
  border-radius: 6px;
  color: #febd69 !important;
  
}

p {
  position: absolute;
  top: 40%;
  left: 30%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: black;
  padding: 8px 8px;
  border-radius: 6px;
  color: #febd69 !important;
  
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



