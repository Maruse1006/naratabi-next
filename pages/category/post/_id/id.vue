<template>
  <div class="form-group">
     <div class="post_name" v-for="post_review in this.currentPost_reviews">
        {{post_reviews}}
     </div>
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
      .get(`http://127.0.0.1:8000/api/category/post/${this.$route.params.id}/${this.$route.params.id}`)
      .then(response => {
        this.post_review= response.data.post_review;
        
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