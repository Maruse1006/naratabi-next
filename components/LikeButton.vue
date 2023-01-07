<template>
  <button
    @click="favorite(id)"
    v-bind:class="{ buttoncolor: buttonstate }"
    value="&#xf164;いいね"
  >
    <font-awesome-icon
      :icon="['far', 'heart']"
      class="font-awesome-size-solid"
    />
  </button>
</template>
<script>
import axios from "axios";
export default {
  name: "Review",
  props: {
    id: {
      type: Number,
      default: "",
    },
  },
  data() {
    return {
      image: {},
      imageId: {},
      buttonstate: false,
    };
  },
  methods: {
    favorite(imageId) {
      console.log(imageId);
      // axios.post(`http://127.0.0.1:8000/api/like/${id}`)
      this.buttonstate = !this.buttonstate;
      axios
        //  .post(`http://127.0.0.1:8000/api/like/${imageId}`)
        .post(`${process.env.BASE_URL}${imageId}`)
        .then((res) => {})
        .catch(function (error) {
          console.log(error);
        });
    },

    getCategories: function () {
      // axios.get(`http://127.0.0.1:8000/api/show`).then(response => {
      axios.get(`${process.env.BASE_URL}show`).then((response) => {
        this.images = response.data.images;
        this.path = response.data.path;
        console.log(response.data.path);
      });
    },
  },
};
</script>
<style scoped>
.buttoncolor {
  color: #fa9797;
  animation: like 0.8s ease-out;
  transition: all 0.3s;
}
.buttoncolor {
  color: red;
}

@keyframes like {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0.5, 0.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
