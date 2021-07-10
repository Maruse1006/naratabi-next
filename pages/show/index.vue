<template>
 <div class="customizedClass">
       <div class="title">
        <h1>投稿一覧</h1>
       </div>
       <div class="box"> 
          <div v-for="image in images" class="flex">{{image.title}}<img v-bind:src="image.path"> </div>
       </div>
       <div class="form">
        <NuxtLink to="/form">
           form page
        </NuxtLink>
        </div>
 </div> 
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            images:[],
            image:[],
            title:'',
            path:[],
            customizedClass:'hoge'
        };
    },
   created(){
 this.getCategories()

 },
  methods:{
 getCategories: function(){
 axios.get(`http://127.0.0.1:8000/api/show`)
.then(response => {
 this.images = response.data.images
 this.path = response.data.path
 console.log(response.data.path)
 });
 },
 
  },
};
</script>

<style scoped>
.title{
    text-align:center;
}

.list{
     width:40%;
     height:50%;
    
     
    
     
}
 .customizedClass {
  height: 100vh;
  background-color:wheat;
  
}
.wrapper {

}
.flex{
   
  display:flex;
   flex-direction:column;
    width:50%;
    text-align:center;
    left:10%;
}
.flex img{
  //width:50%;
  height:60%;
  left:5%;
  align-self: flex-start;

}
 .box{
   display:flex;
   flex-wrap:wrap;
   padding-top:20%;
 }
 .box a{
   display:flex;
   flex-direction:column;
 }
 .form{
   position:absolute;
   top:30%;
   z-index:100;
 }
 
 </style>
