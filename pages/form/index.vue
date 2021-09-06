<template>
    
    <div class="form">
    <h1>写真投稿</h1>
      <div class="back_image">
        <img src="https://naratabi.s3.ap-northeast-1.amazonaws.com/images/sonikogen.jpg" style="width=100%">
      </div>
       <div class="wrapper">
         <div class="file">
           <input
            type="file" ref="preview"
            accept="image/jpeg, image/png"
            @change="onChangeImage" class="preview"
           />
           <img :src="imageData" v-if="imageData">
         </div>
          <div class="box">
           
             </div>
             <button  class="input" @click="postImage">送信</button>
             <div class="title">
             <div class="clumn">
             <p>タイトル </p>
             <input type="text"  class="text" v-model="title">
            </div>
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
h1{
    position:absolute;
    top:10%;
    color:#fff;
    font-family:serif;
    text-align:center;
    left:40%;
}
.wrapper{
    height: 65%;
    background-color:#fff;
}
.file{
    top:50%;
    left:30%;
    position:absolute;
    display:flex;
    flex-direction:column;
}
 .input{
    border-width:10px;
  }
 .form{
     background-color:#fff;
     height:100vh;
     text-align:center;
     
 }
 .title{
     text-align:center;
     postion:absolute;
     top:30%;
 }
 .templete{
     background-color:wheat;
 }
 .box{
     top:30%;
     display:flex;
     flex-direction:column;
 }
 .form{
     color:#000;
     background-color: rgb(51 51 51 / 15%);

 }
 .file img{
     width:30%;
 }
 .input{
     top:75%;
     text-align:center;
     position:absolute;
     background-color:#ccc;
     left:30%;
     width:50%;
 }
 .text{
     border:1px gray double;
     width:50%;
     margin-left:30%;
 }
 .back_image img{
     width:100%;
     height:50%;
     height:200px;
 }
 .clumn{
  display:flex;
  flex-direction:column;
  color:rgb(51 51 51 / 25%);
  padding-top: 4%;
 }
 .clumn p{
     color: rgb(51, 51, 51);
     text-align: left;
     padding-left: 30%;
 }
 
 
 </style>
