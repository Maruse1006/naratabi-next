<template>
<body>
<div class="title">
 <p>鹿と大仏だけじゃない奈良を知る</p>
</div>
 <div class="page_image">
  <img src="~/assets/image/shika.jpg">
 </div>
  <div class="search">
  <select v-model="category.id" >
   <option v-for="category in categories"
  value=(category.id) >
   {{category.id}}

 </option>
</select>
<button class="button" type="text" v-on:click="jump(1)">
 検索
</button>

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
   selected_category_id:'',
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
 axios.get(`http://127.0.0.1:8000/api/posts`)
.then(response => {
 this.categories = response.data.categories
 console.log(response.data)
 });
 },
 jump:function(id){
    this.$router.push({ path: `top/${id}`});
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
