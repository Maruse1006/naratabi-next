<template>
<div class="container">
 <div class="title">
  <p>鹿と大仏だけじゃない奈良を知る</p>
 </div>
 <div class="slider_outer">
   <transition name="fade">
    <div class="slider-inner" :key="idx" v-for="(image, idx) in images" v-if="current_slide == idx">
     <img class="slider-inner" v-bind:src="images[idx].img" :key="images[idx].img" width="450" height="300">
    </div>
   </transition>
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
     <div class="image_post">
        <div class="photoshow">
          <NuxtLink to="/show">
           <div class="post">
            写真一覧をみる
           </div>
          </NuxtLink>
         <NuxtLink to="/form">
           <div class="photoshowtitle"><a>奈良の写真を投稿する！</a></div>
         </NuxtLink>
        </div>  
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
   current_slide:0,
   images:'',
  images:[
   {img:'https://naratabi.s3.ap-northeast-1.amazonaws.com/images/shika.JPG'},
   {img:'https://naratabi.s3.ap-northeast-1.amazonaws.com/images/oomiwa.JPG'},
   {img:'https://naratabi.s3.ap-northeast-1.amazonaws.com/images/BqWJ6Maew497TkYq1oBBkuibneoMO0ERGZWKXJtu.jpeg'},
   ],
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
   mounted() {
　　setInterval(() => {
      this.current_slide = this.current_slide < this.images.length -1 ? this.current_slide +1 : 0
    }, 6000),
     console.log(process.env.MESSAGE)
},
  methods:{
 getCategories: function(){
 this.$axios.$get(`/category`)
.then(response => {
 console.log(response)
 this.categories = response.categories
 console.log(response.data)
 });
 },
 jump:function(id){
    this.$router.push({ path: `category/${id}`});
    console.log(id)
    },
    slideshow(images) {
      const current = images[this.index];
      const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
      current.classList.add('fadein');
      current.classList.remove('fadeout');
     prev.classList.remove('fadein');
      prev.classList.add('fadeout');
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
 .photoshowtitle{
   position:absolute;
   top:80%;
   color:#fff;
   font-family:游明朝体;
   font-size:30px;
   background-color:hsl(182deg 81% 76%);
   z-index:1;
   width:100%;
   height:20%;
   float:right;
   margin-right:3%;
 }
 .photoshowtitle a{
   background-color:rgb(0, 149, 238);
   color:#fff;
   border-radius: 4px;
   font-size: 25px;
   margin-top:15%;
   margin-left:35%;
   
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
   display:flex;
   flex-direction:column;
 }
 .photoshow:after{
   background-color:#fff;
 }
 .photoshow a{
   color:#fff;
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
   top:50%;
   position:absolute;
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
 

.slideshow {
  position: absolute;
}
.post {
  color:#0095EE;
  position:absolute;
  top:88%;
  left:44%;
  z-index: 50;
}


.slider-outer{
  position: relative;
  width: 450px;
  height: 300px;
  overflow: hidden;
  margin: 0 auto 20px;
}
.slider-inner{
  position: absolute;
  width: 100%;
  height: 60vh;
}
.slide-img {
  width: 450px;
  height: 300px;
  object-fit: cover;
}
.fade-enter-active, .fade-leave-active {
  transition: all 3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 780px) {
  p{ color: red; }
}


</style>