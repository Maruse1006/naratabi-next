<template>
  <div class="customizedClass">
    <div class="title">
      <h1>投稿一覧</h1>
    </div>

    奈良の写真を投稿することができます。 投稿ページは
    <NuxtLink to="/form">
      こちらへ
    </NuxtLink>

    <div class="wrapper">
      <div class="box">
        <div class="content">
          <div v-for="image in images" class="flex">
            <img v-bind:src="image.path" />
            <a>{{ image.title }}</a>
             <button @click="unfavorite(image.id)">
                        いいね解除
                    </button>
                    <button @click="favorite(image.id)">
                        いいね
                    </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [],
      image: [],
      title: "",
      path: [],
      customizedClass: "hoge"
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    favorite() {
                axios.post(`http://127.0.0.1:8000/api/like/{imageid}`)
                .then(res => {
                    this.count = res.data.count;
                }).catch(function(error) {
                    console.log(error);
                });
            },
            
            unfavorite() {
                axios.post(`http://127.0.0.1:8000/api/unlike/{imageid}`)
                .catch(function(error){
                    console.log(error);
                });
            },
    getCategories: function() {

      
      axios.get(`http://127.0.0.1:8000/api/show`).then(response => {
        this.images = response.data.images;
        this.path = response.data.path;
        console.log(response.data.path);
      });
    }
  }
};
</script>

<style scoped>
.customizedClass {
  color: black;
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
</style>
