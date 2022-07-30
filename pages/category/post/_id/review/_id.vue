<template>
<div class="container">
  <div class="title">
      <h1>レビュー一覧</h1>
    </div>
    <div class="list" v-for="review in review">
  <div class="username">
   {{review.username}}
   </div>
   <div class="comment">
   {{review.comment}}
   </div>
<img v-bind:src="review.user_image" class="image" />
 </div>
</div>
</template>

<script>
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
import axios from "axios";
import FirstChild from '@/components/FirstChild.vue';

export default {
 created() {
    axios
      .get(`http://127.0.0.1:8000/api/category/post/review/${this.$route.params.id}`)
      .then(response => {
        this.review = response.data.review;
        this.id = response.data.id;
  　　   this.comment = response.data.comment;
        this.post_category_name = response.data.post_category_name;
        console.log(response.data.comment);
      });
  },
  data() {
    return {
         review:"",
         reviews:"",
         comment:"",
    };
  },
};
</script>
<style scoped>
 .list{
     color:black;
     position:absolute;
     top:40%;
     left:50%;
 }
 .container{
   background-color:black;
 }
 .image{
   border-radius: 50%;
   width:30%;
 }
 .title{
   color:black;
   position:absolute;
   top:70px;
   text-align:center;
 }
</style>
