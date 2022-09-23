<template>
  <div class="customizedClass">
    <div class="title">
      <h1>投稿一覧</h1>
    </div>

    奈良の写真を投稿することができます。 投稿ページは
    <NuxtLink to="/form">
      こちらへ
    </NuxtLink>
    <vue-star animate="animated bounceIn" color="#222222">
      <i slot="icon" class="fa fa-heart"></i>
    </vue-star>

    <div class="wrapper">
      <div class="box">
        <div class="content">
          <div v-for="image in images" class="flex">
            <img v-bind:src="image.path" />
            <a>{{ image.title }}</a>
            {{ image.likes_count }}
            <div>
              <UnlikeButton :id="image.id" v-if="image.isLike" />
              <LikeButton :id="image.id" v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LikeButton from "@/components/LikeButton.vue";
import UnLikeButton from "@/components/UnLikeButton.vue";

export default {
  name: "Index",
  components: {
    LikeButton,
    UnLikeButton
  },
  data() {
    return {
      userId: "",
      id: "image.id",
      images: [],
      image: {},
      imageId: {},
      title: "",
      path: [],
      imageId: "",
      customizedClass: "hoge",
      buttonstate: true,
      clickstate: true,
      count: "",
      like_count: "",
      loggedIn: false,
      img: ""
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    favorite(imageId) {
      console.log(imageId);
      // axios.post(`http://127.0.0.1:8000/api/like/${id}`)
      this.buttonstate = !this.buttonstate;
      this.id = id;
      axios
        .post(`http://127.0.0.1:8000/api/like/${imageId}`)
        .then(res => {})
        .catch(function(error) {
          console.log(error);
        });
    },

    getCategories: function() {
      // axios.get(`http://127.0.0.1:8000/api/show`).then(response => {
      //   this.images = response.data.images;
      //   this.path = response.data.path;
      // //  this.user=response.data.user;
      //  // this.image.likes_count = response.data.image.likes_count;
      //   console.log(response.data.images);
      // });

      var url;
      if (this.$auth.loggedIn) {
        url = "http://127.0.0.1:8000/api/show";
      } else {
        url = "http://127.0.0.1:8000/api/show/show";
      }
      axios.get(url).then(response => {
        this.images = response.data.images;
        this.path = response.data.path;
        this.imgs = response.data.imgs;
        console.log(response);
        //  this.user=response.data.user;
        // this.image.likes_count = response.data.image.likes_count;
        console.log(this.loggedIn);
      });
    }
  }
};
</script>

<style scoped>
.customizedClass {
  color: black;
  height: 250vh;
}
.title {
  text-align: center;
  padding-top: 5%;
  color: #000;
}
h1 {
  font-family: Arial;
  font-size: 30px;
}
.form {
  text-align: center;
  padding-top: 5%;
}
.content {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding-top: 5%;
  color: #0099ff;
}
.content a {
  flex-direction: column;
}

.flex a {
  display: flex;
  flex-direction: column;

  border: 1px solid transparent;
}
.flex {
  width: 25%;
  padding-left: 5%;
}
.flex img {
  width: 120px;
  height: 100px;
}

label {
  position: relative;
  cursor: pointer;
}
label svg {
  width: 50px;
}
.buttoncolor {
  fill: #fae2e2;
  transition: all 0.3s;
}
@keyframes like {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
.buttoncolor {
  fill: #fa9797;
  animation: like 0.8s ease-out;
  transition: all 0.3s;
}
.buttoncolor {
  color: red;
}
.click {
  color: red;
}
@keyframes circle {
  0% {
    transform: scale(0.2, 0.2);
  }
  50% {
    transform: scale(0.5, 0.5);
  }
  80% {
    transform: scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3, 1.3);
    opacity: 0;
  }
}
</style>
