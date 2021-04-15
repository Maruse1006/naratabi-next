<template lang="html">
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
        保存しました

        </div>
        <form>
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="TopicTitle" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">内容</label>
                <textarea class="form-control" id="TopicContent" rows="3" v-model="content"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="create">登録</button>
        </form>
        <!-- 商品画像 -->
  　<div class="field image-area">
    <div v-for="(file, index) in files" :key="index" class="product-image">
      <img :src="file" @click="selectProductImage(index)" />
       <input
        　:id="`product_image_` + index"
        　type="file"
      　     accept="image/png,image/jpeg,image/gif"
        　@change="uploadProductImage($event, index)"
     　/>
    </div>
  </div>
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
