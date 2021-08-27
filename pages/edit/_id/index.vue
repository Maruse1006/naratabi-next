<template lang="html">
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
        編集しました
        </div>
        <form>
            <div class="form-group">
            <li v-for post in posts>
            {{post.id}}
            </li>
               a <input type="text" class="form-control" id="id" v-model="name">
            </div>
            <div class="form-group">
                <label for="TopicContent">内容</label>

                <textarea class="form-control" id="id" rows="3" v-model="content"></textarea>
            </div>
            <button type="submit"v-on:click="edit(post.id)" class="btn btn-primary" >登録</button>
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
            post:[],
            id:'',
            name: '',
            content: '',
        }
    },
    created(){
    var id =1;
    axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
            .then(response => {
            this.posts = response.data.posts
            this.id = response.data.id
           console.log(response.data)
            });
   　　　　 },
    methods: {

        edit : function(id) {
            axios.post(`http://127.0.0.1:8000/api/update/${id}`, {
            　　 id:this.id,
                title: this.name,
                content: this.content,
            })
            .then((res) => {
                console.log(res)
                this.name = '';
                this.content = '';
                this.saved = true;
                console.log('created');
            });
        }
    }
}
</script>
<style scoped>
.container{
    background-color:wheat;
}
</style>