<template>
<div>
  <h1>フォーム</h1>
  <li v-for="post in posts">
  {{post.id}}
    <button v-on:click="deleteItem(post.id)" class="btn btn-default" type="button">削除</button>

    <button v-on:click="editItem(post.id)" class="btn btn-default" type="button">編集</button>
  </li>
  <form @submit.prevent="ShiftItem">
    <label>入力：
      <input v-model="newItem" placeholder="入力ください" type="text" @keyup.enter="submit">
    </label>

  </form>
</div>
</template>

<script>
import axios from 'axios';
export default{
data(){
 return{
   posts:[],
   name:'',
   id:'',
   title:'',
   content:'',
   newItem: '',
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
 deleteItem:function(id){


 //var id =1;
 axios.post(`http://127.0.0.1:8000/api/delete/${id}`)
 .then(response=>{
     this.posts = response.data
     console.log(response.data)
    });
 this.posts.splice(post)

  },

  editItem:function(id){
   axios.get(`http://127.0.0.1:8000/api/post/${id}`)
   .then(response=>{
       this.posts = response.data
       console.log(response.data)
      });
      this.$router.push({ path: `post/${id}`});
    }
  }
  }
</script>
