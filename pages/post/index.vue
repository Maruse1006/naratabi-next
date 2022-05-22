

<script>
import axios from 'axios';
export default{
data(){
 return{
   users:[],
   user:[],
   posts:[],
   name:'',
   id:'',
   title:'',
   content:'',
   newItem: '',
   isLoggedIn:'',
   }
},


 created(){
 
 axios.get('http://127.0.0.1:8000/api/posts')
         .then(response => {
         this.posts = response.data.posts
        console.log(response.data)
         });
           },

  methods:{
 deleteItem:function(id){
 //var id =1;
 axios.post(`http://127.0.0.1:8000/api/delete/${id}`)
 .then(response=>{
     this.posts = response.data
     console.log(response.data)
    });
 this.posts.splice(posts)
  },

  editItem:function(id){
   axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
   .then(response=>{
       this.posts = response.data.posts
       console.log(response.data)
      });
      this.$router.push({ path: `edit/${id}`});
    }
  }
  }
</script>
<style>
 body{
 background-color:#0F0;
 }
 .title{
 position:absolute;
 top:120px;
 left:120px;
 font-size: 25px;
 margin-top:20px;
 }

 .search{
   position:absolute;
   top:30%;
   left:30%;
   padding-top:80px;
   clor:#C0C0C0;
 }
</style>