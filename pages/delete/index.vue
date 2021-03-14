<template lang="html">

    <div class="form-group">
      <label for="TopicTitle">タイトル</label>

        　<li v-for="post in posts">{{post.title}}</li>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            saved: false,
            title: '',
            content: '',
        }
    },
    methods: {
        create : function() {
            axios.post('http://127.0.0.1:8000/api/posts', {
                title: this.title,
                content: this.content,
            })
            .then((res) => {
                console.log(res)
                this.title = '';
                this.content = '';
                this.saved = true;
                console.log('created');
            });
        }
    }
}
</script>
