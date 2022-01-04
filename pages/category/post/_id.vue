<template>
  <v-row justify="center">
    <div class="item">
      <div class="name">
        <div class="post_name">
          <p>{{ post.name }}</p>
        </div>
        <div class="post_image">
          {{ post.content }}<img v-bind:src="post.path" class="image" />
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
      <v-btn @click="open">レビュー投稿</v-btn>
      <div class="dialog">
        <v-dialog v-model="dialog">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="modal-body">
            <div class="form-group"></div>
            <div class="form-group">
              <h4>コメント</h4>
              <textarea
                class="form-control"
                v-model="reviewParams.comment"
              ></textarea>
            </div>
          </div>

          <button type="button" class="btn btn-link mr-2" data-dismiss="modal">
            閉じる
          </button>
          <button type="button" class="btn btn-warning" @click="onSubmit">
            登録する
          </button>
        </v-dialog>
      </div>
    </div>
  </v-row>
</template>

<script>
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
import axios from "axios";
export default {
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/category/post/${this.$route.params.id}`)
      .then(response => {
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
      userId: parseInt("{{ auth()->user()->id ?? -1 }}"),
      params: "",
      post: [],
      id: "",
      name: "",
      content: "",
      path: "",
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
      reviewParams: {
        post_id: "",
        stars: "",
        comment: "",
        post: ""
      }
    };
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    jump: function(id) {
      this.$router.push({ path: `/${id}` });
      console.log(id);
    },
    onSubmit(postId) {
      axios
        .post(`http://127.0.0.1:8000/api/review`, this.reviewParams)
        .then(response => {
          if (response.data.result === true) {
            this.getProducts();
            $("#review-modal").modal("hide");
          }
        });
    },
    open: function() {
      // dataのdialogをtrueに書き換えているだけ
      this.dialog = true;
      // 逆にfalseにすれば閉じるを実装できる
    },

    openReviewForm(postId) {
      this.reviewParams = {
        post_id: postId,
        stars: "",
        comment: "",
        post: ""
      };
    }
    //   hasMyReview(reviews) { // すでに投稿済みかどうかのチェック ・・・ ⑥

    //       for(let review of reviews) {

    //           if(this.userId === parseInt(review.user_id)) {
    //              return true;
    //           }
    //       }
    //       return false;
    //  },
  }
};
</script>
<style scoped>
.title {
  text-align: left;
}
.googlemap_box {
  height: 150px;
}

.post_name {
  left: 3%;
  top: 8%;
  width: 54%;
  position: absolute;
  color: #696969;
  border-bottom: solid 2px orange;
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
  padding-top: 10%;
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
.item {
  left: 5%;
}
.img {
  color: #696969;
}
.googlemap_box {
  text-align: center;
}
h5 {
  color: #696969;
}
.dialog {
  color: white;
}
</style>
