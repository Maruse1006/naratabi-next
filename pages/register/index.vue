<template lang="html">
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
        保存しました

        </div>
        <form>
         
            <div class="form-group">
                <label for="TopicTitle">名前</label>
                <input type="text" class="form-control" id="TopicTitle" v-model="id">
                
            </div>
            <div class="form-group">
                <label for="TopicContent">メールアドレス</label>
                <textarea class="form-control" id="TopicContent" rows="3" v-model="email"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="create">登録</button>
         </form>
       </div>
  </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    layout:'register'
    data: function() 
        return {
           name:'',
           email:'',
           saved:'',       
    },
    methods: {
        create : function() {
            axios.post('http://127.0.0.1:8000/api/register_post', {
                name: this.name,
                email: this.email,
            })
            .then((res) => {
                console.log(res)
                this.name = '';
                this.email = '';
                this.save = true;
                console.log('created');
            });
        }
    },
    <style scoped>
    .container{
        background-color:wha
    }
    .body-style{
        background-color:wheat;
    }
    </style>
}
}