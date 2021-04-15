<template>
<body>
<div class="title">
 <p>鹿と大仏だけじゃない奈良を知る</p>
</div>
  <img src="~/assets/image/shika.jpg">
  <div class="search">
     <input type="text" id="input_message"  value="奈良
      "name="input"style="border-radius:10px;" >
      <button　class="button" type="text"
      @click="onSubmit()">検索</button>
  </div>

</div>
</body>
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
 onSubmit:function(){
 axios.post(`http://127.0.0.1:8000/api/top`)
 .then(response=>{
     this.posts = response.data
     console.log(response.data)
    });
    this.$router.push({ path: `./post`});
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
