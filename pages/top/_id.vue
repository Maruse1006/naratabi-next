<template>
  <v-row justify="center">
      <h2>URLパラメータ取得結果：route.params</h2>
      {{ this.$route.params.id }}<br>
      <br>
      {{this.$route.params.name}}
      {{ this.$route.params.content }}<br>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/top/${this.$route.params.id}`)
          .then(response => {
          this.id=response.data.post.id
          this.content=response.data.post.content
          this.posts = response.data
          console.log(response.data)
          });
  },
  data () {
    return {
     params:'',
     title:'',
     content:'',
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
  }
}
</script>
