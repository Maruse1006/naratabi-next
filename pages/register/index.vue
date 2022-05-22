<template>
  <div class="aaa">
    <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/2115784_s.jpg"
      />
    <form @submit.prevent="register">
      <div class="form">
        <div class="block">
      <a>ユーザー名</a>
      <input type="text" v-model="name" placeholder="name" required />
      <a>email</a>
      <input type="email" v-model="email" placeholder="email" required />
      <a>パスワード</a>
      <input
        type="password"
        v-model="password"
        placeholder="password"
        required
      />
      <button type="submit">送信</button>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      name: "aaa",
      email: "ggg@i.com",
      password: "maaru1006"
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("http://localhost:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.$router.push("/login");
      } catch {
        alert("e");
      }
    }
  }
};
</script>
<style scoped>
.aaa {
  
  color: black;
  padding-top: 50px;
  display: flex;
  width: 20%;
  
  z-index: 5;
    left: 0;
   
  
}
.aaa img{
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  opacity: 0.6;
  
}
.form{
   position:absolute;
   background-color:transparent;;
   left: 50%;
}
.block{
  display:flex;
  flex-direction: column;
  margin:0 auto;
}
</style>
