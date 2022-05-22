¥<template>
  <div class="container">
    <v-row justify="center">
      <div class="list">
        <div class="title">
          <h2>検索結果</h2>
        </div>
        <div class="wrapper">
          <div class="name">
            <div class="post_name" v-for="post in this.currentPosts">
              <div class="box">
                <nuxt-link :to="`post/${post.id}`"> {{ post.name }}</nuxt-link>
                <div class="content2">
                  {{ post.content2 }}
                </div>
                <img v-bind:src="post.path" class="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-pagination
        v-model="page"
        :length="length"
        @input="pageChange"
      ></v-pagination>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/category/${this.$route.params.id}`)
      .then(response => {
        this.posts = response.data.posts;
        this.length = Math.ceil(this.posts.length / this.pageSize);
        this.id = response.data.id;
        this.name = response.data.name;
        this.path = response.data.path;
        this.post_category_name = response.data.post_category_name;
        console.log(response.data);
      });
  },
  data() {
    return {
      params: "",
      posts: [],
      post: [],
      id: "",
      name: "",
      content: "",
      post_category_name: "",
      path: "",
      page:1,
      pageSize:6,
      length: 0
    };
  },
  computed: {
    currentPosts: function() {
      return this.posts.slice(
        this.pageSize * (this.page - 1),
        this.pageSize * this.page
      );
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    pageChange: function(pageNumber) {
      this.posts.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
    }
  }
};
</script>
<style scoped>
@media screen and (min-width: 700px) {
  /*　画面サイズが480pxからはここを読み込む　*/
  .container {
    background-color: #fff;
    height: 120vh;
    width: 100%;
  }
  .list {
    text-align: left;
    padding-top: 10%;
  }
  .title {
    color: #000;
    text-align: center;
  }

  .post_name {
    top: 10%;
    width: 20%;
    display: flex;
    float: left;
    margin: 0 5%;
  }

  .name {
    width: 50%;
    height: 50%;
    padding-left: 20px;
  }
  .name img {
    position: relative;
    top: 0%;
    left: 3%;
    width: 100%;
  }
  .wrapper {
    width: 200%;
  }

  body {
    background-color: #0f0;
  }
  .box a {
    display: flex;
    flex-direction: column;
    padding-top: 10%;
  }
  .box {
    margin: 0 auto;
  }
  .content2 {
    color: #000;
  }
}
@media screen and (max-width: 699px) {
  .container {
    background-color: #fff;
    height: 200vh;
    width: 100%;
  }
  .list {
    text-align: center;
    padding-top: 10%;
  }
  .title {
    color: #000;
    text-align: center;
  }

  .post_name {
    top: 10%;
    width: 50%;
    height: 30%;
    display: flex;
    float: left;
    margin: 0 5%;
    margin: 0 auto;
    padding: 10%;
  }

  .name {
    width: 50%;
    height: 50%;
    padding-left: 20px;
  }
  .name img {
    position: relative;
    top: 0%;
    left: 3%;
    width: 100%;
  }
  .wrapper {
    width: 200%;
  }

  body {
    background-color: #0f0;
  }
  .box a {
    display: flex;
    flex-direction: column;
    padding-top: 10%;
  }
  .box {
    margin: 0 auto;
  }
  .content2 {
    color: #000;
  }
}
</style>
