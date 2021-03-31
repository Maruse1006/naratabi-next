<template lang="html">
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
        編集しました
        </div>
        <form>
            <div class="form-group">
            <li v-for="post in posts">
                {{post.id}}
                {{post.title}}
                {{post.content}}
            </li>
                <input type="text" class="form-control" id="id" v-model="id">
                <input type="text" class="form-control" id="id" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">内容</label>
                {{ this.$route.query.id}}<br>
                {{ this.$route.query.content }}<br>
                {{ this.$route.query.title }}<br>
                <textarea class="form-control" id="id" rows="3" v-model="content"></textarea>
            </div>
            <button type="submit"v-on:click="edit(id)" class="btn btn-primary" >登録</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            saved: false,
            posts:[],
            id:'',
            title: '',
            content: '',
        }
    },
    created(){
    var id =1;
        axios.get(`http://127.0.0.1:8000/api/post/${id}`)
            .then(response => {
            this.posts = response.data
           console.log(response.data)
            });
   　　　　 },
    methods: {
    edit : function(id) {
        axios.post(`http://127.0.0.1:8000/api/post/${id}`, {
        　　 id:this.id,
            title: this.title,
            content: this.content,
        })
        }
    }
    }

</script>
