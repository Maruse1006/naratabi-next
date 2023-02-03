<template>
  <div>
    <div class="back_image">
      <img
        src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/2115784_s.jpg"
        style="width=100%"
      />
    </div>
    <div class="wrapper">
      <div class="box"></div>
      <div class="title">
        <div class="login">投稿するにはログインが必要です。</div>
        <v-btn @click="move">loginページへ</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    move() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.file img {
  width: 30%;
}
.title {
  position: absolute;
  top: 300px;
  left: 300px;
  left: 47%;
}
.login {
  color: black;
  width: 500%;
}

.back_image {
  color: black;
  display: flex;
  width: 130%;
  z-index: 5;
  left: 0;
}
.back_image img {
  min-height: 200vh;
  width: 140%;
}
.input {
  color: black;
}
.preview img {
  width: 10%;
}
.photo img {
  width: 10%;
}
@media screen and (max-width: 400px) {
  .back_image img[data-v-965aa0f8] {
    min-height: 200vh;
    width: 140%;
  }
}
</style>
