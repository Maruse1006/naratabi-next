<template>

  <v-row justify="center">
  <div class="name">
       <div class="title">
        <h2>詳細画面</h2>
       </div>    
            <div class="post_name" v-for="post in posts" >{{post.name}}</div>
            <div class="post_image" v-for="post in posts" ><img v-bind:src="post.path" class="image" ></div>
  </div>
    <div class="post_content" v-for="post in posts" >{{post.content}}</div>
    
     <td>
        
          </td>
  </v-row>
  
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/category/post/${this.$route.params.id}`)
          .then(response => {
          this.posts= response.data
           
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
     name:'',
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

 .title{
   text-align:center;
 }
 .name{
  display:flex;
   flex-direction:column;
 }
 .post_name{
   text-align:center;
 }
 .post_content{
   width:80%;
 }
 .image img{
   width:20%;
 }
 
 </style>