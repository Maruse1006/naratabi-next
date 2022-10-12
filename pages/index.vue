<template>
  <div class="container">
    <div class="title">
      <p>鹿と大仏だけじゃない奈良を知る</p>
    </div>
    <div class="slider_outer">
      <transition name="fade">
        <div
          class="slider-inner"
          :key="idx"
          v-for="(image, idx) in images"
          v-if="current_slide == idx"
        >
          <img
            class="slider-inner"
            v-bind:src="images[idx].img"
            :key="images[idx].img"
            width="450"
            height="300"
          />
        </div>
      </transition>
    </div>
    <div class="category_search_form">
      <div class="select_title">
        <p>下記ボタンをクリックして検索しよう</p>
        <select
          v-model="category_id"
          v-on:change="jump(category_id)"
          class="select"
        >
          <option value="">category</option>
          <option v-for="category in categories" :value="category.id">
            {{ category.id }}
            {{ category.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- <div class="post"> -->
    <div class="back">
      <button v-on:click="postImage" class="input">
        写真一覧
      </button>

      <button v-on:click="move" class="photoshowtitle">
        写真を投稿する
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category_id: "",
      category_name: "",
      categories: [],
      category: [],
      post: [],
      id: "",
      user: "",
      name: "",
      current_slide: 0,
      images: "",
      images: [
        {
          img:
            "https://naratabi.s3.ap-northeast-1.amazonaws.com/images/shika.JPG"
        },
        {
          img:
            "https://naratabi.s3.ap-northeast-1.amazonaws.com/images/oomiwa.JPG"
        },
        {
          img:
            "https://naratabi.s3.ap-northeast-1.amazonaws.com/images/BqWJ6Maew497TkYq1oBBkuibneoMO0ERGZWKXJtu.jpeg"
        }
      ]
    };
  },
  created() {
    axios.get(`http://127.0.0.1:8000/api/category`).then(response => {
      this.categories = response.data.categories;
      console.log(response.data);
    });
  },
  mounted() {
    setInterval(() => {
      this.current_slide =
        this.current_slide < this.images.length - 1
          ? this.current_slide + 1
          : 0;
    }, 6000),
      console.info(
        "this.$axios.defaults.baseURL:",
        this.$axios.defaults.baseURL
      );
  },
  methods: {
    //  getCategories: function() {
    //    this.$axios.$get(`api/category`).then(response => {
    //      console.log(response);
    //      this.categories = response.catagories;
    //      console.log(response.data);
    //    });
    //  },
    jump: function(id) {
      this.$router.push({ path: `category/${id}` });
      console.log(id);
    },
    move() {
      if (this.$auth.loggedIn) {
        this.$router.push("./form");
      } else {
        this.$router.push("./");
      }
      console.log(user);
    },
    postImage() {
      this.$router.push("./show");
    },
    slideshow(images) {
      const current = images[this.index];
      const prev = images[this.index - 1]
        ? images[this.index - 1]
        : images[images.length - 1];
      current.classList.add("fadein");
      current.classList.remove("fadeout");
      prev.classList.remove("fadein");
      prev.classList.add("fadeout");
    }
  }
};
</script>
<style scoped>
.back {
  background-color: hsl(182deg 81% 76%);
  position: absolute;
  top: 50%;
  width: 100%;
  height: 80%;
}
.postbutton {
  width: 100px;
}
.post {
  color: #0095ee;
  position: absolute;
  top: 95%;
  left: 44%;
  z-index: 1;
  margin: 30px;
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  position: absolute;
  top: 15%;
  left: 30%;
  font-size: 50px;
  margin-top: 20px;
  backgroud-color: #f2f2f3;
  margin: 30px;
  z-index: 10;
  color: #fff;
}
.title::after {
  background-color: #fff;
}
.photoshowtitle {
  position: absolute;
  left: 48%;
  top: 65%;
  color: #fff;
  font-family: 游明朝体;
  font-size: 18px;
  padding: 10px;
  background-color: deepskyblue;
  z-index: 1;
  width: 35%;
  height: 18%;
  float: right;
  margin-right: 3%;
  border-radius: 100px;
}
.photoshowtitle a {
  background-color: #2f09f04f;
  color: #fff;
  border-radius: 10px;
  font-size: 25px;
  margin-top: 10%;
  padding: 10px;
}

.search {
  top: 100%;

  padding-top: 80px;
  color: #c0c0c0;
}
.photoshow {
  left: 50%;
  top: 200%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.photoshow:after {
  background-color: #fff;
}
.photoshow a {
  color: #fff;
}
.photoshow img {
  width: 100%;
  margin: 0 auto;
  top: 30%;
  left: 0%;
}
.select {
  width: 50%;
  height: 44px;
  left: 50px;
  color: #a0a4ad;
  padding-left: 15px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #cfd1d6;
  font-size: 0.7rem;
  position: relative;
  z-index: 0;
  transition: box-shadow 0.2s;
  left: 10%;
}
.select_title,
::after {
  color: black;
  top: 30%;
  position: absolute;
  font-size: 20px;
  background-color: #f2f2f3;
  width: 60%;
  height: 30%;
  border-radius: 0 30px 30px 0;
  z-index: 2;
  padding: 50px 0;
  font-size: 0.9rem;
  font-family: Avenir-Black, Arial, TazuganeGothicStdN-Bold, "游ゴシック体",
    YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
}
select_title::after {
  backgroud-color: #f2f2f3;
}
.select_title p {
  padding-left: 10%;
}
.select_box {
  backgroud-color: 2f2f3;
  border: radius;
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 30px 30px;
}

.slideshow {
  position: absolute;
}
.post {
  color: #0095ee;
  position: absolute;
  top: 70%;
  left: 44%;
  z-index: 1;
  margin: 30px;
}

.slider-outer {
  position: relative;
  width: 450px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto 20px;
}
.slider-inner {
  position: absolute;
  width: 100%;
  height: 60vh;
}
.slide-img {
  width: 450px;
  height: 300px;
  object-fit: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.v-footer {
  margin-top: 150%;
}

.background {
  background-color: hsl(182deg 81% 76%);
  position: absolute;
  width: 1000px;
  height: 1000px;
  top: 400px;
}
.input {
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 20px 30px;
  height: 18%;
  width: 35%;
  border-radius: 100px;
  top: 65%;
  left: 5%;
  position: absolute;
}

@media screen and (min-width: 700px) {
  .back {
    background-color: hsl(182deg 81% 76%);
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    flex-direction: wrap;
    position: absolute;
    flex-direction: wrap;
  }

  .photoshowtitle {
    /* position: relative;
    top: 55%;
    color: #fff;
    font-family: 游明朝体; */
    font-size: 30px;
    left: 50%;
    background-color: deepskyblue;
    /* z-index: 1;*/
    width: 45%;
    height: 15%;
    /* left: 25%;
    float: right;
    margin-right: 3%;
    border-radius: 200px; */
  }
  .photoshow a {
    color: #fff;
    font-size: 30px;
    font-family: 游明朝体;
  }
  .background {
    background-color: hsl(182deg 81% 76%);
    position: absolute;
    top: 800px;
    width: 100%;
  }
  .input {
    position: absolute;

    top: 65%;
    color: #fff;
    font-family: 游明朝体;
    font-size: 30px;
    padding: 10px;
    background: #222;
    z-index: 1;
    width: 45%;
    height: 15%;
    float: right;
    margin-right: 3%;

    border-radius: 100px;
  }
  .post {
    color: #0095ee;
    position: absolute;
    top: 95%;
    left: 44%;
    z-index: 1;
    margin: 10px;
  }
  .select {
    height: 50%;
    width: 80%;
    border-radius: 40px;
  }
  .image_post {
    display: flex;
    flex-direction: wrap;
  }
  .fade {
    position: relative;
  }
}
</style>
