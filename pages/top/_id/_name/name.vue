<template>

  <v-row justify="center">
      <h2>URLパラメータ取得結果：route.params</h2>
      {{ this.$route.params.id }}<br>
      {{ this.$route.params.name}}
      {{ this.$route.params.content }}<br>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/top/${this.id}/${this.name}`)
          .then(response => {
          this.posts = response.data.post
          this.id = response.data.id
          this.name = response.data.name
          console.log(response.data)
          });
  },
  data () {
    return {
     params:'',
     post:[],
     id:'',
     name:'',
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
<style scoped>

 body{
 background-color:#0F0;
 }
 </style
