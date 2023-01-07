<template>
  <div class="container">
    <div class="title">
      <div class="back_image">
        <img
          src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/sonikogen.jpg"
          style="width=100%"
        />
        <h1>投稿一覧</h1>
        <p>
          奈良の写真を投稿することができます。 投稿ページは
          <NuxtLink to="/form"> こちらへ </NuxtLink>
        </p>
      </div>
    </div>

    <vue-star animate="animated bounceIn" color="#222222">
      <i slot="icon" class="fa fa-heart"></i>
    </vue-star>

    <div class="wrapper">
      <div class="box">
        <div class="content">
          <div v-for="image in images" class="flex">
            <img v-bind:src="image.path" @click="openModal(image.path)" />
            <modal
              :src="selectedImage"
              v-show="showContent"
              @close="closeModal"
            />
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
import Photo from "@/components/Photo.vue";

export default {
  layout: "list",
  name: "Index",
  components: {
    LikeButton,
    UnLikeButton,
    Photo,
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
      img: "",
      showContent: "",
      selectedImage: "",
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
        .post(`like/${imageId}`)
        .then((res) => {})
        .catch(function (error) {
          console.log(error);
        });
    },
    openModal(path) {
      this.showContent = true;
      this.selectedImage = path;
    },
    closeModal() {
      this.showContent = false;
    },

    getCategories: function () {
      var url;
      if (this.$auth.loggedIn) {
        url = `${process.env.BASE_URL}/show`;
        //"${process.env.BASE_URL}/show"
      } else {
        url = `${process.env.BASE_URL}/show/show`;
        //${process.env.BASE_URL}/show/show"
      }
      axios.get(url).then((response) => {
        this.images = response.data.images;
        this.path = response.data.path;
        this.imgs = response.data.imgs;
        console.log(response);
        console.log(this.loggedIn);
      });
    },
  },
};
</script>

<style scoped>
.container {
  color: black;
  margin: 0 auto;
  height: 250vh;
  width: 100%;
  padding: 0;
  margin: 0;
}
.title {
  text-align: center;
  color: #000;
}
h1 {
  position: absolute;
  top: 10%;
  color: #fff;
  font-family: serif;
  text-align: center;
  display: block;
  /* left: 40%; */
}
.form {
  text-align: center;
  padding-top: 5%;
  color: white;
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
  padding: 10px;
}

label {
  position: relative;
  cursor: pointer;
}
label svg {
  width: 50px;
}
p {
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
    color: white;
  }
}
.back_image img {
  width: 140%;
  height: 160px;
}
h1 {
  position: absolute;
  top: 5%;
  color: #fff;
  font-family: serif;
  text-align: center;
  left: 40%;
}
.form p {
  position: absolute;
  top: 120px;
  background-color: transparent;
  margin: 0 auto;
  text-align: center;
}
</style>
