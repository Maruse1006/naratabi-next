<template>
  <div>
    <input v-model="email" />
    <br />
    <input v-model="password" />
    <br />
    <button @click="login">ログイン</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {},
  methods: {
    login: function() {
      axios
        .post("/api/logimm", {
          username: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
　        //うまくいったらログイン後の画面にpushする
        })
        .catch(err => console.log(err));
    }
  }
};
</script>