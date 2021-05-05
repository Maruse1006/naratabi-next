<template>
  <v-row justify="center">
    <v-col cols="9">
      <h2>URLパラメータ取得結果：route.params</h2>
      {{ this.$route.params.id }}<br>
      {{this.$route.parames.category_id}}
      <br>
      {{this.$route.params.title}}
      {{ this.$route.params.content }}<br>
      <v-btn color="purple" @click="returnPage()">戻る</v-btn>
      <input type="text" class="form-control"  v-model="params">
      <input type="text" class="form-control"  v-model="title">
      <input type="text" class="form-control"  v-model="content">
      <button type="submit"@click="editItem()" class="btn btn-primary" >登録</button>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get(`http://127.0.0.1:8000/api/post/${this.$route.params.id}`)
          .then(response => {
          this.name=response.data.post.name
          this.content=response.data.post.content
          this.posts = response.data
          console.log(response.data)
          });
  },
  data () {
    return {
     params:'',
     title:'',
     content:'',
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    editItem:function( ){

    console.log(this.$route.params.id)

     axios.post(`http://127.0.0.1:8000/api/post/${this.$route.params.id}`,{
       id:this.$route.params.id,
       name:this.name,
       content:this.content,
     })
     .then(response=>{
         this.posts = response.data
         this.name ='';
         this.content = '';
         this.saved = '';
         console.log(response.data)
        });
  }
}
}

</script>
