<template lang="html">
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
        保存しました

        </div>
        <form>
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="TopicTitle" v-model="name">
            </div>
            <div class="form-group">
                <label for="TopicContent">内容</label>
                <textarea class="form-control" id="TopicContent" rows="3" v-model="content"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="create">登録</button>
        </form>
  </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            saved: false,
            name: '',
            content: '',
        }
    },
    methods: {
        create : function() {
            axios.post('http://127.0.0.1:8000/api/posts', {
                name: this.name,
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
