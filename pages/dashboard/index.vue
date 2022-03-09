<template>
  <div class="container">
    <div>
      <h1>ダッシュボード</h1>
      <p>ログイン状態：{{ $auth.loggedIn }}</p>
      <p>ユーザー名：{{ $auth.user }}</p>

      <button @click="$auth.logout()">ログアウト</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
      name: "a"
    };
  },
  created() {
    console.log(this.$auth);
  }
};
</script>
<style scoped>
.container {
  background-color: #fff;
  text-align: center;
  padding-top: 10%;
  color: black;
}
</style>
