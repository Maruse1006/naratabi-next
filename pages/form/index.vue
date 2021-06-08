<template>
    <div>
        <input
            type="file"
            accept="image/jpeg, image/png"
            @change="onChangeImage"
        />
        <button @click="postImage">送信</button>
          
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            images: {},
            title:"",
        };
    },
    methods: {
      
        onChangeImage: function(e) {
            this.image = e.target.files[0];
        },
        
        
        postImage: function() {
          
            const config = {
                header: {
                    "Content-Type": "multipart/form-data"
                }
                
            
                
            };
            
            var formData = new FormData();
            
            formData.append("image", this.image);

            axios.post('http://127.0.0.1:8000/api/form/s3', formData, config).then(res => {
                  console.log(res);
              });
        }
    }
};
</script>