<template>
  <div class="form-group">
    
        {{review}}
   </div>                     
</template>

<style>
.body-style {
  background-color: #eee;
}
.form-group{
    color:black;
}
</style>

<script>
import axios from 'axios';
export default {  
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/category/post/${this.$route.params.id}`)
      .then(response => {
        this.reviews = response.data.reviews;
        
      });
  data: {
           reviews:[] 
            }
        },
        head: {
    bodyAttrs: {
      class: 'body-style'
    }
  },
    
}