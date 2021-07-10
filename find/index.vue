<template>
<body>
<div>
  <img src="~/assets/image/shika.jpg">
  </div>
  <li v-for="post in posts">
  {{post.id}}
  </li>
</div>
</body>
</template>

<script>
import axios from 'axios';
export default{
data(){
 return{
   categories:[],
   posts:[],
   id:'',
   name:'',
   content:'',
   }
},
 created(){
 axios.get('http://127.0.0.1:8000/api/posts')
         .then(response => {
         this.posts = response.data
        console.log(response.data)
         });
           },
  methods:{
  }
  }
</script>
<style>
 body{
 background-color:#0F0;
 }
 .title{
 width:100%;
 position:absolute;
 top:120px;
 left:120px;
 font-size: 25px;
 margin-top:20px;
 }

 .search{
   position:absolute;
   top:30%;
   left:30%;
   padding-top:80px;
   clor:#C0C0C0;
 }
</style>
