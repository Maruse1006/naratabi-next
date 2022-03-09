<template>
  <div class="box">
    <form @submit.prevent="loginUser">
      <transition>
        <div v-show="show" class="title">
          <h1>ようこそ</h1>
        </div>
      </transition>

      <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/2115784_s.jpg"
      />

      <div class="aaaa">
        <label>メールアドレス</label><br />
        <div class="email"><input v-model="form.email" /><br /></div>
        <label>パスワード</label><br />
        <div class="password"><input v-model="form.password" /><br /></div>
      </div>

      <div class="login">
        <button type="submit">ログイン</button>
      </div>
    </form>
    <div class="bbb">
      <v-btn to="/register" nuxt class="bbb">新規登録</v-btn>
    </div>
  </div>
</template>
<script>
import { Service } from "axios-middleware";

import axios from "axios";

const service = new Service(axios);

service.register({
  onRequest(config) {
    if (typeof config.auth == "string") {
      config.headers["Authorization"] = `Bearer ${config.auth}`;
      delete config.auth;
    }
    return config;
  }
});

export default {
  middleware({ store, redirect }) {
    if (store.$auth.loggedIn) {
      redirect("/");
    }
  },
  data() {
    return {
      form: {
        email: "aaa1006@.gmail",
        // email: "aaa1006@.gmail",
        password: "ivusa1006",
        Service: ""
      },
      show: true
    };
  },
  methods: {
    loginUser() {
      console.log(`a`);
      this.$auth.loginWith("local", {
        data: this.form
      });
    }
  }
};
</script>
<style scoped>
.box {
  background: #50a3a2;
  background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
}
.register {
  padding-top: 20%;
  width: 10%;
  height: 10%;
  margin-top: 30px;
}
.box {
  text-align: center;
  //padding-top: 5%;
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
        opacity:0;
    }
    100% {
        opacity:5;
    }
}
.email {
  border: 1px solid #333;
  background: #e4fdff;
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
  //border: 1px solid #333;
  //background: #e4fdff;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  animation: fadein-anim 15s linear forwards;
}
.password1 {
  position: relative;
  top: 50%;
  left: 5%;
  z-index: 10;
  color: black;
}
.login {
  border-radius: 100vh;
  background-color: #eb6100;
  width: 20%;
  margin: 0 auto;
  margin-top: 5%;
  position: absolute;
  top: 50%;
  left: 40%;
  animation: fadeIn 3s ease 0.3s 1 normal;
}
.box img {
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: relative;
  z-index: 0;
  opacity: 0.6;
}
.aaaa {
  position: absolute;
  top: 30%;
  left: 30%;
  //z-index: 10;
}
.title {
  position: absolute;
  //z-index: 10;
  top: 20%;
  left: 30%;
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
  top: 65%;
  left: 40%;
  position: absolute;
}
.tran {
  background-color: black;
  position: absolute;
  top: 40%;
}
.v-enter-active {
  transition: opacity 1s;
}

/* 表示アニメーション */
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
