<template>
<body>
<div class="title">
 <p>鹿と大仏だけじゃない奈良を知る</p>
</div>
 <div class="page_image">
  <img src="~/assets/image/shika.jpg">
 </div>
   <div class="select_title">
     <h1>下記ボタンをクリックして検索しよう</h1>
   </div>
  
    <select v-model="category_id" v-on:change="jump(category_id)" class="select">
      <option value="">選択なし</option>
       <option v-for="category in categories" :value= "category.id" >
       {{category.id}}
       {{ category.name}}
       </option>
       </select>
       
     <div class="photoshow">
        <NuxtLink to="/show">
          <div class="photoshowtitle">奈良の写真を投稿しよう！</div>
        </NuxtLink>
                <img src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/BqWJ6Maew497TkYq1oBBkuibneoMO0ERGZWKXJtu.jpeg">
          </NuxtLink>
         </div>  
       
     
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
   category_id:'',
   category_name:'',
   categories:[],
   category:[],
   post:[],
   id:'',
   name:'',
   }
},
 created(){
 //axios.get(`http://127.0.0.1:8000/api/posts`)
//.then(response => {
// this.categories = response.data.categories
 //console.log(response.data)
 //});
 this.getCategories()

 },
  methods:{
 getCategories: function(){
 axios.get(`http://127.0.0.1:8000/api/category`)
.then(response => {
 this.categories = response.data.categories
 console.log(response.data)
 });
 },
 jump:function(id){
    this.$router.push({ path: `category/${id}`});
    console.log(id)
    }
  },

}
</script>
<style scoped>

 
 .title{
 position:absolute;
 top:20%;
 left:30%
 ;
 font-size: 25px;
 margin-top:20px;
 }
 .page_image img{
 width:100%;
 height:20%;
 }
 .photoshowtitle{
   left:30%;
   position:absolute;
   top:75%;
   color:#FFF;
   font-family:游明朝体;
   margin:0 auto;
 }

 .search{
   top:100%;
   
   padding-top:80px;
   clor:#C0C0C0;
 }
 .photoshow{
   left:20%;
   top:200%;
 }
 .photoshow img{
   width:120%;
   height:300px;
   margin:0 auto;
   top:30%;
   left:0%;
 }
 .select{
  position:absolute;
  left:40%;
  font-size:30px;
  top:40%;
  font-family:serif;
  color:#fff;
 }
 .select_title{
   top:35%;
   position:absolute;
   font-size:10px;
   left:30%;
   margin:0 auto;
 }
</style>