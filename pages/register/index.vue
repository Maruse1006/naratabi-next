<template>
  <div class="aaa">
    <form @submit.prevent="register">
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
  //background-color: black;
  color: black;
  padding-top: 50px;
  display: flex;
  width: 20%;
  margin: 0 auto;
}
</style>
