<template>
  <v-app dark>
    <!-- <h1 v-if="error.statusCode === 404"> -->
    <!-- <div class="title">投稿するにはログインが必要です。</div> -->
    <!-- </h1> -->
    <!-- <h1 v-else>
      {{ otherError }}
    </h1> -->
    <button v-on:click="move" class="login">loginページへ</button>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  methods: {
    move() {
      this.$router.push("./login");
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  top: 40%;
  left: 15%;
  color: black;
  margin: 0 auto;
}
h1 {
  font-size: 20px;
}
.login {
  color: black;
  position: absolute;
  left: 40%;
  top: 50%;
}
</style>
