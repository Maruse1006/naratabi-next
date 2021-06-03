<template>

  <v-row justify="center">
      <h2>URLパラメータ取得結果：route.params</h2>
      {{ this.$route.params.id }}<br>

  <li v-for="post in posts">{{post.name}}</li>
  </v-row>
  
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/category/${this.$route.params.id}`)
          .then(response => {
          this.posts = response.data.posts
          
          this.id = response.data.id
          this.name= response.data.name
          console.log(response.data)
          });
          
  },
  data () {
    return {
     params:'',
     posts:[],
    
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
