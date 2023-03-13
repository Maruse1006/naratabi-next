<template>
  <div class="box">
    <div class="image">
      <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/2115784_s.jpg"
      />
    </div>

    <div class="login">
      <transition>
        <div class="title">
          <h1>新規登録</h1>
        </div>
      </transition>
      <label>name</label><br />
      <div class="name"><input type="text" v-model="name" /><br /></div>
      <label>email</label><br />
      <div class="email"><input type="text" v-model="email" /><br /></div>
      <label>パスワード</label><br />
      <div class="password"><input v-model="password" /><br /></div>
      <div class="file">
        <input
          type="file"
          ref="preview"
          accept="image/jpeg, image/png"
          @change="onChangeImage"
          class="preview"
          width="100px"
        />
      </div>
      <button class="input" @click="postImage">送信</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      saved: false,
      name: "",
      email: "",
      password: "",
      images: {},
      title: "",
      imageData: "",
    };
  },
  methods: {
    onChangeImage: function (e) {
      this.image = e.target.files[0];
      const files = e.target.files;

      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    postImage: function () {
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      var formData = new FormData();

      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.password);

      axios
        .post(`${process.env.BASE_URL}register`, formData, config, {
          // "http://127.0.0.1:8000/api/register", formData, config
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          (this.name = ""), (this.email = ""), (this.saved = true);
          console.log(res);
        });
    },
  },
};
</script>
<style scoped>
.image img {
  margin: 0 auto;
  opacity: 0.6;
}

.register {
  margin-top: 20px;
  /* position: absolute;
  left: 18%; */
}
.box {
  text-align: center;
  /* padding-top: 5%; */
}
h1 {
  font-size: 40px;
  display: inline-block;
  font-weight: 200;
  position: abusolute;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 5;
  }
}
.name {
  animation: fadein-anim 15s linear forwards;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
.email {
  cursor: pointer;
  color: white;
  width: 50%;
  margin: 0 auto;
  top: 70%;
  left: 30%;
  z-index: 10;
  animation: fadein-anim 15s linear forwards;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
.password {
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  animation: fadein-anim 15s linear forwards;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
.password1 {
  position: relative;
  top: 50%;
  left: 5%;
  z-index: 10;
  color: black;
}
.login {
  width: 100%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
.login_button {
  border-radius: 100vh;
  line-height: 40px;
  background-color: #eb6100;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 5%;
  color: white;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
.box img {
  min-height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: relative;
  z-index: 0;
  /* opacity: 0.6; */
}
.aaaa {
  color: black;
  /* //z-index: 10; */
}
.title {
  color: black;
  text-align: center;
  animation: fadein-anim 15s linear forwards;
}
@keyframes fadein-anim {
  100% {
    opacity: 5;
  }
}
input {
  background-color: white;
  outline: solid 2px black;
}
.bbb {
  top: 135%;
  /* margin: 0 auto; */
  position: absolute;
  animation: fadein-anim 15s linear forwards;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
.tran {
  background-color: black;
  position: absolute;
  top: 40%;
}
.v-enter-active {
  transition: opacity 1s;
}

.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.preview {
  width: 120px;
  margin-top: 20px;
  animation: fadein-anim 15s linear forwards;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
@media screen and (min-width: 800px) {
  .title {
    color: black;

    animation: fadein-anim 15s linear forwards;
  }
  .aaaa {
    color: black;
    /* //z-index: 10; */
  }
  .preview input {
    width: 120px;
    margin-top: 20px;
  }
  input.preview {
    margin-top: 20px;
  }
}
</style>
