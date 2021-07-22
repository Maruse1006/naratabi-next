<template>
    <div class="form">
    　<div class="title">
          <h1>写真投稿</h1>
      </div>
         <div class="file">
           <input
            type="file" ref="preview"
            accept="image/jpeg, image/png"
            @change="onChangeImage" class="file"
           />
         </div>
           <h2>title</h2>
           <div class="box">
             <div class="input">
               <input type="text"  v-model="title">
             </div>
                 <button @click="postImage">送信</button>
                 <img :src="imageData" v-if="imageData">
             </div>
    </div>    
    </div>
</template>

<script>
import axios from 'axios';
export default {
    
    data() {
        return {
            saved:false,
            images: {},
            title:'',
            imageData: '',
        };
    },
    methods: {
      
        onChangeImage: function(e) {
            this.image = e.target.files[0];
            const files = e.target.files;

    if(files.length > 0) {

        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {

            this.imageData = e.target.result;

        };
        reader.readAsDataURL(file);
        }
        },
         
        
    
        postImage: function() {
          
            const config = {
                header: {
                    "Content-Type": "multipart/form-data"
                }
            };
    
            var formData = new FormData();
            
            formData.append("image", this.image);
            formData.append("title",this.title);

            axios.post('http://127.0.0.1:8000/api/form/s3', formData, config,{
                title:this.title,
        
            }).then(res => {
                 this.title='';
                 this.saved = true;
                 console.log(res);
              });
        },
        
    }
};
</script>
<style scoped>
.file{
    top:40%;
    left:30%;
}
 .input{
    border-width:10px;
  }
 .form{
     background-color:wheat;
     height:100vh;
     text-align:center;
     
 }
 .title{
     text-align:center;
 }
 .templete{
     background-color:wheat;
 }
 .box{
     display:flex;
     flex-direction:column;
 }
 
 
 </style>
