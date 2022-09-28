<template>
  <div class="form">
    <h1>写真投稿</h1>
    <div class="back_image">
      <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/sonikogen.jpg"
        style="width=100%"
      />
    </div>
    <div class="wrapper">
      <div class="box"></div>

      <div class="title">
        <div class="clumn">
          <p>タイトル</p>
          <input type="text" class="text" v-model="title" />
        </div>
        <div class="file">
          <input
            type="file"
            ref="preview"
            accept="image/jpeg, image/png"
            @change="onChangeImage"
            class="preview"
          />
          <img :src="imageData" v-if="imageData" />
        </div>
        <v-btn class="input" @click="postImage">送信</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      saved: false,
      images: {},
      title: "",
      imageData: ""
    };
  },
  methods: {
    onChangeImage: function(e) {
      this.image = e.target.files[0];
      const files = e.target.files;

      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    postImage: function() {
      const config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      };

      var formData = new FormData();

      formData.append("image", this.image);
      formData.append("title", this.title);

      axios
        .post("http://127.0.0.1:8000/api/form/s3", formData, config, {
          title: this.title
        })
        .then(res => {
          this.title = "";
          this.saved = true;
          console.log(res);
        });
    }
  }
};
</script>
<style scoped>
h1 {
  position: absolute;
  top: 10%;
  color: #fff;
  font-family: serif;
  text-align: center;
  left: 40%;
}
.wrapper {
  height: 65%;
  background-color: #fff;
}
.file {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-left: 1%;
  padding-top: 3%;
}
.input {
  border-width: 10px;
  margin-top: 3%;
}
.form {
  background-color: #fff;
  height: 100vh;
  text-align: center;
}
.title {
  text-align: center;
  top: 30%;
}
.templete {
  background-color: wheat;
}
.box {
  top: 30%;
  display: flex;
  flex-direction: column;
}
.form {
  color: #000;
  background-color: rgb(51 51 51 / 15%);
}
.file img {
  position: absolute;
  width: 10%;
  left: 60%;
}
.input {
  top: 75%;
  text-align: center;
  background-color: #ccc;

  width: 50%;
}
.text {
  margin: 0 auto;
  border: 1px gray double;
  width: 50%;
}
.back_image img {
  width: 100%;
  height: 50%;
  height: 200px;
}
.clumn {
  display: flex;
  flex-direction: column;
  color: rgb(51 51 51 / 25%);
  padding-top: 4%;
}
.clumn p {
  color: rgb(51, 51, 51);
  text-align: left;
  padding-left: 30%;
}
.preview {
  margin: 0 auto;
}
</style>
