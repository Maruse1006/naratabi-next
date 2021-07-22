<template>
 <div class="container">
  <v-row justify="center">
  <div class="list">
       <div class="title">
         <h2>一覧結果</h2>
       </div>
      <div class="wrapper">    
        <div class="name" > 
          <div class="post_name" v-for="post in posts" >
            <div class="box"> <nuxt-link :to="`post/${post.id}`">     
              {{post.name}}<img v-bind:src="post.path" class="image" ></nuxt-link>
              </div>
          </div>
        </div>
      </div> 
  </div>    
  </v-row>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/category/${this.$route.params.id}`)
          .then(response => {
          this.posts= response.data.posts
          
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
    
  },
  }

</script>
<style scoped>
.container{
  background-color:#DDDDDD;
  height:100vh;
}
.list{
  text-align:center;
}

.post_name{
  top:10%; 
  width:50%;
  display:flex;
  float:left;
} 
  

.name{
     width:50%;
     height:50%;
     padding-left:20px;
}
.name img{
  position:relative;
  top:40%;
  left:25%;
  width:50%;
}
.wrapper{
  width: 200%;
}

 body{
 background-color:#0F0;
 }
 .box a{
   display:flex;
   flex-direction:column;
   padding-top:10%;
 }
 
 </style>
