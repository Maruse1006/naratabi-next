<template>
<body>
<div>
  <img src="~/assets/image/shika.jpg">
  </div>
  <EditArticle v-if="user.role && (user.type === 'admin' || post.owner === user.id )"></EditArticle>
  <li v-for="post in posts">
  {{post.name}}
    <button v-on:click="deleteItem(post.id)" class="btn btn-default" type="button">削除</button>
    <button v-on:click="editItem(post.id)" class="btn btn-default" type="button">編集</button>
  </li>
</div>
</body>
</template>

<script>
import axios from 'axios';
export default{
data(){
 return{
   users:[],
   user:[],
   posts:[],
   name:'',
   id:'',
   title:'',
   content:'',
   newItem: '',
   isLoggedIn:'',
   }
},
//let user = methodToGetUser()
 
// user.role = 'admin'
//can(post.role, 'create', 'article') // => true
 //const acl = {
  //article: { // どれに
  //  create: { // 何を
    //   役割が
  //    admin: true
  //  }
 // }
//},
//const acl = {
//  article: {
//    edit: (user, article) => {
   
//      if (user.role === 'admin') return true
     
//    }
//  }
//},

 created(){
 
 axios.get('http://127.0.0.1:8000/api/posts')
         .then(response => {
         this.posts = response.data.posts
        console.log(response.data)
         });
           },

  methods:{
 deleteItem:function(id){
 //var id =1;
 axios.post(`http://127.0.0.1:8000/api/delete/${id}`)
 .then(response=>{
     this.posts = response.data
     console.log(response.data)
    });
 this.posts.splice(posts)
  },

  editItem:function(id){
   axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
   .then(response=>{
       this.posts = response.data
       console.log(response.data)
      });
      this.$router.push({ path: `edit/${id}`});
    }
  }
  }
</script>
<style>
 body{
 background-color:#0F0;
 }
 .title{
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
