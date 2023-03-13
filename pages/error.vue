<template>
  <div class="box">
    <form @submit.prevent="loginUser">
      <div class="image">
        <img
          src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/2115784_s.jpg"
        />
      </div>

      <div class="login">
        <transition>
          <div v-show="shoaw" class="title">
            <h1>投稿するにはloginが必要です</h1>
          </div>
        </transition>

        <div class="login_button">
          <div class="submit">
            <label>投稿するにはloginが必要です</label><br />
            <v-btn @click="move" class="button">loginページへ</v-btn>
          </div>
        </div>
      </div>
    </form>
    <!-- <div class="bbb">
      <v-btn to="/register" nuxt class="bbb">新規登録</v-btn>
    </div> -->
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
  },
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
        email: "",
        // email: "aaa1006@.gmail",
        password: "",
        Service: "",
      },
      show: true,
    };
  },
  methods: {
    move() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
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
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
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
@media screen and (min-width: 800px) {
  .title {
    color: black;

    animation: fadein-anim 15s linear forwards;
  }
  .aaaa {
    color: black;
    /* //z-index: 10; */
  }
}
</style>
