<template>
<div class="modal fade" id="review-modal">
  <div class="form-group">
            <div class="name" > 
            <li v-for="post in posts">
              {{posts}}         
            </li>           
          </div>
        </div>
            
   </div> 
 </div>                    
</template>

<style>

.post_name {
  color:black;
}
.form-group{
    color:black;
    padding-top:30%;
    background-color:wheat;
  
}
.button{
  color:black;
}
</style>

<script>
import axios from 'axios';
layout:'sample_layout',
export default {  
  data: {
     return{
            
            posts:'',
            }
     }
        },
        head: {
  
  }、
  created(){
  axios.get(`http://127.0.0.1:8000/api/`)
          .then(response => {
          this.posts= response.data.posts
          console.log(response.data)
          });
          
  },
    methods: {
        onSubmit(postId) {
            axios.post('http://127.0.0.1:8000/api/post', {
            .then(response => {

                        if(response.data.result === true) {

                            this.getPosts();
                            $('#review-modal').modal('hide');

                        }
               
            })
            .then((res) => {
                console.log(res)
                this.stars = '';
                this.comment = '';
                this.save = true;
                console.log('created');
            });
        }
    },
}