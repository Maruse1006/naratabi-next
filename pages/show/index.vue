<template>
    <div class="list">
        <div v-for="image in images"><img v-bind:src="image.path"></div>
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

 body{
 background-color:#0F0;
 }
 .list{
     display:flex;
     width:50%;
 }
 .list img{
   width:20%;
 }
 
 </style>
