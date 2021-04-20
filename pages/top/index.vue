<template>
<body>
<div class="title">
 <p>鹿と大仏だけじゃない奈良を知る</p>
</div>
 <div class="page_image">
  <img src="~/assets/image/shika.jpg">
 </div>
  <div class="search">
  <select v-model="selected_category_id">
  <option value="">選択なし</option>
  <option v-for="category in categories" value="">
  {{category.name}}</option>
</select>
  </div>

</div>

</div>
</body>
</template>

<script>
import axios from 'axios';
export default{
data(){
 return{
   selected_category_id:'',
   categories:[],
   category:[],
   id:'',
   name:'',
   }
},
 created(){
 axios.get(`http://127.0.0.1:8000/api/posts`)
 .then(response => {
 this.posts = response.data
console.log(response.data)
 });
 },

  methods:{
 onSubmit:function(){
 axios.post(`http://127.0.0.1:8000/api/`,
 {
 id:this.id,
 name: this.name,
 content: this.content,
 })
 .then(response=>{
     this.posts = response.data
     console.log(response.data);
     this.name = '';
     this.content = '';
     this.saved = true;
    });

    this.$router.push({ path: `./post`});
  }
  },

}
</script>
<style scoped>

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
 .page_image img{
 width:100%;
 height:20%;
 }

 .search{
   position:absolute;
   top:30%;
   left:30%;
   padding-top:80px;
   clor:#C0C0C0;
 }
</style>
