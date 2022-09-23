<template>
  <div id="overlay">
    <div id="content">
      <img :src="src" />
    </div>
    <button @click="$emit('close')" class="modal">閉じる</button>
    <!-- <div id="content"> -->
    <!-- <img :src="val.path2">
      </div>
      <button @click="$emit('close')">閉じる</button> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Modal",

  props: ["src"],
  //   created() {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/category/post/${this.$route.params.id}`)
  //     .then(response => {
  //       this.post = response.data.post;
  //       this.name = response.data.name;
  //       this.path = response.data.path;
  //       this.path2 = response.data.path2;
  //       console.log(response.data.post);
  //       console.log(response.data.comment);
  //     });
  // },

  data() {
    return {
      post: [],
      items: [{ path: "" }, { path2: "" }]
    };
  }
};
</script>
<style>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 100%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}

#content > img {
  width: 55%;
}
.modal {
  position: absolute;
  top: 370px;
  z-index: 10;
  color: black;
}
</style>
