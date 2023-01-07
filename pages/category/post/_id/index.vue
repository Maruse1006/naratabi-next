<template>
  <v-row justify="center">
    <div class="item">
      <div class="name">
        <div class="post_name">
          <p>{{ post.name }}</p>
        </div>
        <div class="post_image">
          <div class="content">
            {{ post.content }}
          </div>
          <v-carousel
            :show-arrows="false"
            height="200px"
            width="100px"
            class="image"
          >
            <v-carousel-item
              :src="post.path"
              class="image"
              @click="openModal(post.path)"
            ></v-carousel-item>
            <v-carousel-item
              :src="post.path2"
              class="image"
              @click="openModal(post.path2)"
            ></v-carousel-item>
          </v-carousel>
          <modal
            :src="selectedImage"
            v-show="showContent"
            @close="closeModal"
          />
        </div>
      </div>

      <div class="open">
        <h1>営業時間</h1>
        <div class="openning_hour">{{ post.openning_hour }}</div>
      </div>
      <div class="address_box">
        <h2>住所</h2>
        <div class="adress">{{ post.adress }}</div>
      </div>
      <div class="access_box">
        <h3>アクセス</h3>
        <div class="access">{{ post.access }}</div>
      </div>
      <div class="official_url_box">
        <h3>公式url</h3>
        <a
          :href="post.official_url"
          target="_blank"
          rel="noopener"
          　class="image"
          >{{ post.official_url }}</a
        >
      </div>
      <div class="googlemap_box">
        <div class="access"><iframe v-bind:src="post.googlemap"></iframe></div>
      </div>
      <div class="button">
        <v-btn @click="open">レビュー投稿</v-btn>
      </div>
      <div class="review">
        <nuxt-link :to="`../post/review/${post.id}`"> レビュー一覧へ</nuxt-link>
      </div>
      <div class="dialog">
        <v-dialog v-model="dialog">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="modal-body" style="background: white; color: #222222">
            <div class="form-group"></div>
            <div class="form-group">
              <h4>コメント</h4>
              <div class="comment_box">
                <textarea
                  class="form-control"
                  v-model="reviewParams.comment"
                ></textarea>
              </div>
              <v-rating
                v-model="reviewParams.stars"
                background-color="purple lighten-3"
                color="purple"
                large
              ></v-rating>
            </div>

            <button type="button" class="btn btn-link mr-2" @click="close">
              閉じる
            </button>
            <button type="button" class="btn btn-warning" @click="onSubmit">
              登録する
            </button>
          </div>
        </v-dialog>
      </div>
    </div>
  </v-row>
</template>

<script>
import axios from "axios";
import Modal from "~/components/Modal.vue";

export default {
  layout: "list",
  components: {
    Modal,
  },
  created() {
    axios
      .get(`${process.env.BASE_URL}/category/post/${this.$route.params.id}`)
      .then((response) => {
        this.post = response.data.post;
        this.id = response.data.id;
        this.name = response.data.name;
        this.path = response.data.path;
        this.openning_hour = response.data.oppenning_hour;
        this.access = response.data.adress;
        this.official_url = response.data.official_url;
        this.googlemap = response.data.googlemap;
        this.comment = response.data.comment;
        console.log(response.data.post);
        console.log(response.data.comment);
      });
  },
  data() {
    return {
      user_id: parseInt("{{ auth()->user()->id ?? -1 }}"),
      params: "",
      post: [],
      id: "",
      name: "",
      // item:"",
      content: "",
      path: "",
      path2: "",
      opening_hour: "",
      adress: "",
      official_url: "",
      googlemap: "",
      review: "",
      post: "",
      stars: "",
      star: "",
      comment: "",
      dialog: "",
      rating: "",
      items: [{ path: "" }, { path2: "" }],
      selectedImage: "",
      reviewParams: {
        post_id: `${this.$route.params.id}`,
        stars: "",
        rating: "",
        comment: "",
        post: "",
      },
      showContent: "",
      postItem: "",
    };
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    jump: function (id) {
      this.$router.push({ path: `/${id}` });
      console.log(id);
    },
    onSubmit() {
      axios
        .post(`http://127.0.0.1:8000/api/review`, this.reviewParams)
        .then((response) => {
          if (response.data.result === true) {
            getPosts();
            $("#review-modal").modal("hide");
          }
        });
    },
    open: function () {
      // dataのdialogをtrueに書き換えているだけ
      // 逆にfalseにすれば閉じるを実装できる
      if (this.$auth.loggedIn) {
        this.dialog = true;
      } else {
        this.$router.push("/guide");
      }
    },
    close: function () {
      this.dialog = false;
    },

    openReviewForm() {
      this.reviewParams = {
        post_id: `${this.$route.params.id}`,
        stars: "",
        comment: "",
        post: "",
        user_id: "",
      };
    },
    openModal(path) {
      this.showContent = true;
      this.selectedImage = path;
    },
    closeModal() {
      this.showContent = false;
    },
  },
};
</script>
<style scoped>
.review {
  color: blue;
  margin-left: 45%;
  top: 70%;
  left: 50%;
  width: 40%;

  padding-top: 5%;
}
.container {
  margin: 0 auto;
}
.item {
  margin: 0 auto;
  height: 300vh;
}
.title {
  text-align: left;
}
.googlemap_box {
  height: 150px;
}

.post_name {
  top: 30%;
  font-size: 15px;
  font-family: serif;
  border-bottom: solid 2px orange;
  width: 88%;
  padding-top: 30%;
  margin-left: 6%;
}
.post_content {
  width: 80%;
}
.img image {
  text-align: right;
  width: 50%;
}
.access {
  height: 150%;
}
.post_image {
  display: flex;
  color: #696969;
  padding-top: 5%;
  padding-left: 30px;
  margin-right: 10%;
}
.post_image img {
  padding-left: 20px;
  width: 40%;
  height: 40%;
}
.item {
  color: #696969;
  float: left;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.swiper-container {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-left: 1px solid #fff;
}
h1 {
  font-size: 15px;
  font-family: serif;
  border-bottom: solid 2px orange;
  width: 95%;
}
.open {
  //position:absolute;
  clear: borth;
  left: 5%;
  padding-left: 30px;
}
.address_box {
  //position:absolute;
  top: 70%;
  left: 5%;
  width: 100%;
  padding-left: 30px;
}
h2 {
  width: 95%;
  border-bottom: solid 2px orange;
  font-size: 15px;
  font-family: serif;
}
.access_box {
  padding-left: 30px;
  top: 85%;
  left: 5%;
}
h3 {
  border-bottom: solid 2px orange;
  font-size: 15px;
  font-family: serif;
  width: 95%;
}
.official_url_box {
  padding-left: 30px;
  top: 100%;
  left: 5%;
  width: 100%;
}
.name {
  color: black;
}
.item {
  margin: 0 auto;
}
.image img {
  color: #696969;
  width: 40px;
}
.googlemap_box {
  text-align: center;
}
h5 {
  color: #696969;
}
.dialog {
  color: white;
  background-color: white;
}
.button {
  width: 30px;
  margin: 0 auto;
  padding-top: 10%;
  padding-right: 15%;
}
.button1 {
  position: abolute;
  width: 30px;
}
.modal-body {
  background-color: white;
  color: black;
  text-align: center;
  height: 500px;
}
.rate-form {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.rate-form input[type="radio"] {
  display: none;
}
.rate-form label {
  position: relative;
  padding: 0 5px;
  color: #ccc;
  cursor: pointer;
  font-size: 35px;
}
.rate-form label:hover {
  color: #ffcc00;
}
.rate-form label:hover ~ label {
  color: #ffcc00;
}
.rate-form input[type="radio"]:checked ~ label {
  color: #ffcc00;
}
.form-control {
  border-radius: 10px;
  border: 1px solid #333;
  height: 30%;
}
.carousel-inner {
  width: 100px;
  text-align: center;
  padding: 30px;
}
.carousel-item img {
  width: 100px;
  text-align: center;
  margin-left: 50px;
}
.image {
  width: 300px;
}
.content {
  width: 80%;
  font-size: 16px;
  padding-right: 10px;
}
@media screen and (min-width: 700px) {
  .review {
    color: blue;
    top: 80%;
    left: 5%;
    margin: 0 auto;
    padding-top: 5%;
  }
  .button {
    position: relative;
  }
  .item {
    width: 140%;
    margin: 0 auto;
  }
  .review a {
    color: blue;
    top: 90%;
    left: 42%;
    width: 40%;
    padding-top: 5%;
  }
}
</style>
