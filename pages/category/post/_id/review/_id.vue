<template>
  <div class="container">
    <div class="title">
         <div class="back_image">
      <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/sonikogen.jpg"
        style="width=100%"
      />
    
        <h1>レビュー一覧</h1>
      </div>
    </div>
    <div class="list" v-for="review in review">
      <div class="username">
        <div class="box">
          <div class="image">
          <img v-bind:src="review.user_image" class="image" />
          </div>
          <div class="name">
            {{ review.username }}
          </div>
          <div class="comment">
            {{ review.comment }}
          </div>
          <div class="star">
           
          </div>
          <!-- <star-rating v-model="rating"></star-rating> -->
          <v-rating
            v-model="review.stars"
            background-color="purple lighten-3"
            color="yellow"
            large
            >{{ review.stars }}</v-rating
          >
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAwesomeSwiper from "vue-awesome-swiper";
//import 'swiper/dist/css/swiper.css'
import axios from "axios";
import FirstChild from "@/components/FirstChild.vue";
import VueStar from "~/components/VueStar.vue";

export default {
  components: {
    VueStar
  },
  created() {
    axios
      .get(
        `${process.env.BASE_URL}category/post/review/${this.$route.params.id}`
      )
      .then(response => {
        this.review = response.data.review;
        this.id = response.data.id;
        this.comment = response.data.comment;
        this.post_category_name = response.data.post_category_name;
        this.review.stars = response.data.stars;
        console.log(response.data);
      });
  },
  data() {
    return {
      review: "",
      reviews: "",
      comment: "",
      star: "",
      rating: "",
      stars: "",
      reviewParams: {
        post_id: `${this.$route.params.id}`,
        stars: "",
        rating: "",
        comment: "",
        post: ""
      }
    };
  }
};
</script>
<style scoped>
.list {
  color: black;
  /* position: absolute; */
  top: 40%;
  left: 10%;
}
.username {
  left: 20%;
}
.container {
  background-color: black;
}
.image img{
  border-radius: 50%;
  width: 10%;
}
.title a {
  color: black;
  position: absolute;
  top: 70px;
  text-align: center;
}
.reviewtitle {
  top: 70px;
  padding-top: 80px;
  text-align: center;
  background-color: white;
  color: black;
}
.name {
  padding-right: 10px;
}
.username {
  
}
.box {
  background-color:white;
  margin:0 auto;
  text-align:center;
 
}
.back_image {
  background-color:white;
}
.back_image img {
  width: 100%;
  height: 50%;
  height: 200px;
}
h1{
  position: absolute;
    top: 20%;
    color: #fff;
    font-family: serif;
    text-align: center;
    
    width: 100%;
  
}
</style>
