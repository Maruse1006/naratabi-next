<template>
  <v-row justify="center">
    <v-col cols="9">
      <h2>URLパラメータ取得結果：route.params</h2>
      {{ this.$route.params.id }}<br>
      <br>
      {{ this.$route.params.content }}<br>
      <v-btn color="purple" @click="returnPage()">戻る</v-btn>

      <input type="text" class="form-control"  v-model="content">
      <button type="submit"v-on:click="editItem()" class="btn btn-primary" >登録</button>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  created(){
  axios.get('http://127.0.0.1:8000/api/post/{id}')
          .then(response => {
          this.posts = response.data
         console.log(response.data)
          });

  },
  data () {
    return {
     id:'',
     title:'',
     content:'',
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    editItem:function(id){
     axios.get(`http://127.0.0.1:8000/api/post/${id}`)
     .then(response=>{
         this.posts = response.data
         console.log(response.data)
        });
  }
}
}

</script>
