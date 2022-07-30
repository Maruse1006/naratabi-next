<template>

 <button @click="favorite(id)" v-bind:class="{buttoncolor:buttonstate}" 
            value="&#xf164;いいね"  >
               <font-awesome-icon :icon="['far', 'heart']" class="font-awesome-size-solid" />  
                          　
            </button>       
</template>
<script>
import axios from "axios";
export default {
   name: 'Review',
   props:{
      id: {
      type: Number,
      default: "",
    },
   },
data() {
    return {
      image: {},
      imageId:{},
      buttonstate:false
    };
  },
  methods: {
    favorite(imageId) {
                 console.log(imageId);
                // axios.post(`http://127.0.0.1:8000/api/like/${id}`)
                this.buttonstate =!this.buttonstate
                axios.post(`http://127.0.0.1:8000/api/like/${imageId}`)
                .then(res => {
                                 
                }).catch(function(error) {
                    console.log(error);
                });
            },  
      
    getCategories: function() {
      axios.get(`http://127.0.0.1:8000/api/show`).then(response => {
        this.images = response.data.images;
        this.path = response.data.path;
        console.log(response.data.path);
      });
    }
  }
  };
</script>