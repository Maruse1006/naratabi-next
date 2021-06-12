<template>

  <v-row justify="center">
  <div class="title">
      <h2>a</h2>
      <div class="name" v-on:change="jump(post.id)"> 
        <li v-for="post in posts">{{post.name}}</li>
        
      </div>
     </div> 
     <td>
        
          </td>
  </v-row>
  
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/top/post/${this.$route.params.id}`)
          .then(response => {
          this.posts= response.data.post
          
          this.id = response.data.id
          this.name= response.data.name
          this.path = response.data.path
          console.log(response.data)
          });
          
  },
  data () {
    return {
     params:'',
     posts:[],
     post:[],
     id:'',
     name:[],
     content:'',
     path:'',
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    jump:function(id){
    this.$router.push({ path: `/${id}`});
    console.log(id)
    }
  },
  }

</script>
<style scoped>

 body{
 background-color:#0F0;
 }
 .name{
  display:flex;
  flex-wrap: wrap;
 }
 
 </style>
