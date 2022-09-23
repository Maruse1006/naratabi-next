<template>
  <div class="form">
    <div class="back_image">
      <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/2115784_s.jpg"
        style="width=100%"
      />
    </div>
    <div class="wrapper">
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
      <div class="box"></div>
      <div class="title">
        <div class="clumn">
          <div class="name">
            <a>name </a>
            <input type="text" v-model="name" />
          </div>
          <div class="email">
            <a>email</a>
            <input type="email" v-model="email" placeholder="email" required />
          </div>
          <div class="password">
            <a>パスワード</a>
            <input
              type="password"
              v-model="password"
              placeholder="password"
              required
            />
          </div>
          <button class="input" @click="postImage">送信</button>
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
      saved: false,
      name: "iii",
      email: "iii@i.com",
      password: "iii1006",
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
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.password);

      axios
        .post("http://127.0.0.1:8000/api/register", formData, config, {
          //title: this.title,
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(res => {
          (this.name = ""), (this.email = ""), (this.saved = true);
          console.log(res);
        });
    }
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  top: 100px;
  left: 300px;
  display: flex;
  flex-direction: wrap;
}
.colum {
  display: flex;
  flex-direction: wrap;
  top: 50%;
}
.back_image {
  color: black;
  padding-top: 50px;
  display: flex;
  width: 10%;
  z-index: 5;
  left: 0;
}
.back_image img {
  min-height: 100vh;
}
.input {
  position: absolute;
  top: 100px;
  color: black;
}
</style>
