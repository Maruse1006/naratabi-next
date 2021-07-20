<template>

  <v-row justify="center">
  <div class="item">
  <div class="name">    
      <div class="post_name" v-for="post in posts" ><p>{{post.name}}</p></div>
      <div class="post_image" v-for="post in posts" >{{post.content}}<img v-bind:src="post.path" class="image" ></div>
  </div>
 
  <div class="open">
   <h1>営業時間</h1>
   <div class="openning_hour" v-for="post in posts">{{post.openning_hour}}</div>  
  </div>
  <div class="address_box">
     <h2>住所</h2>
     <div class="adress" v-for="post in posts">{{post.adress}}</div>
  </div>   
  <div class="access_box">
   　<h3>アクセス</h3>
     <div class="access" v-for="post in posts">{{post.access}}</div>
  </div>
  <div class="official_url_box">
   　<h3>公式url</h3>
       <a v-bind:href="post.official_url" class="image" >test</a>
  </div>
  <div class="googlemap_box">
     <div class="access" v-for="post in posts"><iframe v-bind:src="post.googlemap"></iframe></div>
  </div>
 </div>
    
    
  </v-row>
  
</template>

<script>
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/category/post/${this.$route.params.id}`)
          .then(response => {
          this.posts= response.data
          this.id = response.data.id
          this.name= response.data.name
          this.path = response.data.path
          this.openning_hour = response.data.oppenning_hour
          this.access = response.data.adress
          this.official_url = response.data.official_url
          this.googlemap = response.data.googlemap
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
     opening_hour:'',
     adress:'',
     official_url:'',
     googlemap:'',
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
   text-align:left;
 }
  
 .post_name{
   left:3%;
   top:5%;
   width:60%;
   position:absolute;
   color:#696969;
   border-bottom: solid 2px orange;
 }
 .post_content{
   width:80%;
 }
 .img image{
   text-align:right;
   width:50%;
 }
 .post_image{
   display:flex;
   color:#696969;
   padding-top:10%;
   padding-left:30px;
   margin-right:10%;
 }
 .post_image img{
   width:30%;
   padding-left:20px;
 }
 .item{
   color:#696969;
   float:left;
   display:flex;
   flex-direction:column;
 }

 .swiper-container {
  height: 300px;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-left:1px solid #fff;
}
h1{
  font-size:15px;
  font-family:serif;
  border-bottom: solid 2px orange;

}
.open{
  //position:absolute;
  clear:borth;
  left:5%;
  padding-left:30px;
}
.address_box{
  //position:absolute;
  top:70%;
  left:5%;
  width:100%;
  padding-left:30px;
  
}
h2{
  width:100%;
   border-bottom: solid 2px orange;
   font-size:15px;
   font-family:serif;
}
.access_box{
 padding-left:30px;
  top:85%;
  left:5%;
}
h3{
  border-bottom: solid 2px orange;
  font-size:15px;
  font-family:serif;
  width:100%;
}
.official_url_box{
  padding-left:30px;
  top:100%;
  left:5%;
  width:100%;
}
.item{
  left:5%;
}
.img{
  color:#696969;
}
.googlemap_box{
  text-align:center;
}
 
 </style>