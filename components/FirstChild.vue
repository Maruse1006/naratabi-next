
<template>
 <div class="user_image" >
   <div class="list" v-for="postreview in  postreviews" >
              <img v-bind:src="postreview.user_image" class="image" />
           </div>
           <div class="username">{{postreview.username}}</div>
           <div class="comment"> {{postreview.comment}} </div>
           <div class=" fas fa-star" v-for="star in  postreview.stars" > </div>
   </div>        
</template>
<script>
export default {
   name: 'FirstChild',
  
};
</script>