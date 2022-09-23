<template>
  <div class="container">
    <div>
       <div class="login">ログイン状態：{{ $auth.loggedIn }}</div>
       <a>ログインアウトしますか</a>
       <div class="logout"><button @click="move">はい</button></div>
        <nuxt-link to="/">いいえ</nuxt-link>
      　<div class="block">
       <a>ログイン後、投稿できます</a>
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
    
  },
  methods:{
  
    move(){
          this.$router.push('/login');
  },
  }
};
</script>
<style scoped>
.container {
  background-color: #fff;
  text-align: center;
  padding-top: 10%;
  color: black;
  margin-top:30px;
}
input{
  border: 1px solid black;
}
.title{
  width:600px;
  background-color:antiquewhite;
  border-radius:10px;
  margin:0 auto;
  top:70px;
  padding-right:30px;
}
.login{
  border-bottom:4px solid red;
  width:600px;
  padding:10px;
  margin:0 auto;
}
.id{
   border-bottom:4px solid red;
   width:600px;
   margin:0 auto;
   padding:10px;
}
.name{
   border-bottom:4px solid red;
   width:600px;
   margin:0 auto;
   padding:10px;
}
button{
  background-color:darksalmon;
  color:white;
  border-radius:10px;
}
.logout{
  padding:10px;  
  border-radius:10px;
}
.edit{
  border-radius:10px;
}
</style>
