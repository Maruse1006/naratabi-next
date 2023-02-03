<template>
  <div class="container">
    <div class="block">
      <div class="title">myページ</div>

      <!-- {{$auth.id}} -->
      <div class="login">ログイン状態：{{ $auth.loggedIn }}</div>
      <!-- <div class="id">ユーザーid：{{ $auth.user.id}}</div> -->
      <div v-if="$auth.loggedIn" class="name">
        ユーザー名：{{ $auth.user.user }}
      </div>

      <div class="button">
        <div class="logout">
          <button @click="$auth.logout()">ログアウト</button>
        </div>
        <!-- <div class="edit"><button v-on:click="editItem($auth.user.id)" class="btn btn-default" type="button">編集</button></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return this.$auth.user;
  },
  created() {
    console.log(this.$auth);
  },
  methods: {},
};
</script>
<style scoped>
.container {
  background-color: #fff;
  text-align: center;
  padding-top: 10%;
  color: black;
  /* margin-top: 30px;
  position: absolute; */
}
.block {
  position: absolute;
  left: 20%;
}
input {
  border: 1px solid black;
}
.title {
  width: 600px;
  background-color: antiquewhite;
  border-radius: 10px;
  margin: 0 auto;
  top: 70px;
  padding-right: 30px;
}
.login {
  border-bottom: 4px solid red;
  width: 600px;
  padding: 10px;
  margin: 0 auto;
}
.id {
  border-bottom: 4px solid red;
  width: 600px;
  margin: 0 auto;
  padding: 10px;
}
.name {
  border-bottom: 4px solid red;
  width: 600px;
  margin: 0 auto;
  padding: 10px;
}
button {
  background-color: darksalmon;
  color: white;
  border-radius: 10px;
}
.logout {
  padding: 10px;
  border-radius: 10px;
}
.edit {
  border-radius: 10px;
}
</style>
