<template>
<div class="container">
 <div class="title">
  <p>鹿と大仏だけじゃない奈良を知る</p>
 </div>
   <div class="page_image">
      <img src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/S__43925506.jpg">
  </div>
  <div class="category_search_form">
   <div class="select_title">
       <p>下記ボタンをクリックして検索しよう</p>
       <select v-model="category_id" v-on:change="jump(category_id)" class="select">
        <option value="">category</option>
        <option v-for="category in categories" :value= "category.id" >
        {{category.id}}
        {{ category.name}}
        </option>
       </select>
      </div>  
  </div>  
        <div class="photoshow">
         <NuxtLink to="/form">
           <div class="photoshowtitle"><a>奈良の写真を投稿する！</a></div>
           
         </NuxtLink>
        </div>  
</div>

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
 .title {
  position:absolute;
 top:15%;
 left:30%;
 font-size: 50px;
 margin-top:20px;
 backgroud-color:#f2f2f3;
 margin:30px;
 z-index:10;
 color:#fff;
 }
 .title::after{
   background-color:#fff;
 }
 .page_image img{
 background: #f2f2f3;
 width: 110%;
 height: 100%;
 position:relative;
 }
 .photoshowtitle{
   position:absolute;
   top:85%;
   color:#fff;
   font-family:游明朝体;
   font-size:30px;
   background-color:hsl(182deg 81% 76%);
   z-index:1;
   width:100%;
   height:10%;
   float:right;
   margin-right:3%;
 }
 .photoshowtitle a{
   background-color:rgb(0, 149, 238);
   color:#fff;
   border-radius: 4px;
   font-size: 25px;
   left:40%;
   float:right;
   margin-right:5%;
 }

 .search{
   top:100%;
   
   padding-top:80px;
   clor:#C0C0C0;
 }
 .photoshow{
   left:20%;
   top:200%;
   background-color:#fff;
 }
 .photoshow:after{
   background-color:#fff;
 }
 .photoshow img{
   width:100%;
   margin:0 auto;
   top:30%;
   left:0%;
 }
 .select{
  width: 50%;
    height: 44px;
    color: #a0a4ad;
    padding-left: 15px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #fff;
    border: 1px solid #cfd1d6;
    font-size: .7rem;
    position: relative;
    z-index: 0;
    transition: box-shadow .2s;
    left:10%;
 }
 .select_title,::after{
   color:black;
   top:55%;
   position:relative;
   font-size:20px;
   background-color:#f2f2f3;
   width:60%;
   height:30%;
   border-radius:0 30px 30px 0;
   z-index:2;
   padding:50px 0;
   font-size: .9rem;
    font-family: Avenir-Black,Arial,TazuganeGothicStdN-Bold,"游ゴシック体",YuGothic,"游ゴシック","Yu Gothic",sans-serif;
    font-weight: 700;
    margin-bottom: 20px;
    position:absolute;
    
 }
 select_title::after{
   backgroud-color:#f2f2f3;
 }
 .select_title p{
   padding-left:10%;
 }
 .select_box{
   backgroud-color:2f2f3;;
   border:radius;
   width:100%;
   height:100%;
   border-radius:30px 30px 30px 30px;
 }

</style>