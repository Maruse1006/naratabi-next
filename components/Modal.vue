<template>
  <div id="overlay">
    <div id="content">
      <img :src="src" />
    </div>
    <button @click="$emit('close')" class="modal">閉じる</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Modal",

  props: ["src"],

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
  top: 60%;
  z-index: 10;
  color: black;
}
@media screen and (max-width: 699px) {
  .modal {
    position: absolute;
    top: 80%;
    z-index: 10;
    color: black;
  }
}
</style>
