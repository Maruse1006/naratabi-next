<template>
  <div class="form-group">
            <h4>スター</h4>
            <div v-for="star in [5,4,3,2,1]">
              <input v-model="stars" type="radio" :value="star">
             
            </div>
  
                <div class="form-group">
                        <h4>コメント</h4>
                        <textarea class="form-control" v-model="comment"></textarea>
                </div> 
           <button type="button" class="btn btn-warning" @click="onSubmit">登録する</button>        
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
layout:'sample_layout',
export default {  
  data: {
            userId: parseInt('{{ auth()->user()->id ?? -1 }}'), // ログイン・ユーザーID ・・・ ⑤
            posts: [],
            reviewParams: {
                post_id: '',
                star:'',
                stars: '',
                comment:''
            }
        },
        head: {
    bodyAttrs: {
      class: 'body-style'
    }
  }、
    methods: {
        onSubmit(postId) {
            axios.post('http://127.0.0.1:8000/api/review', {
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