<template>
  <div class="box">
    <form @submit.prevent="loginUser">
      <h1>ログイン</h1>
      <label>ユーザー名</label><br />
      <input v-model="form.name" /><br />
      <label>パスワード</label><br />
      <input v-model="form.password" /><br />
      <button type="submit">ログイン</button>
    </form>
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
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginUser() {
      this.$auth.loginWith("local", {
        data: this.form
      });
    }
  }
};
</script>
<style scoped>
.box {
  color: #000;
  background-color: #fff;
  padding-top: 5%;
  padding-left: 10%;
}
</style>
