<template lang="html">
    <div class="container">
         <div class="title">ユーザー情報変更</div>
       <form>
            <div class="form-group">
            <div class="user">
             <div class="user_id">
               <div class="login">ログイン状態：{{ $auth.loggedIn }}</div>
               <div class="id">ユーザーid：{{ $auth.user.id}}</div>
               <div class="name">ユーザー名：{{ $auth.user.user}}</div>
            </div>
            </div>
            <!-- <div class="a"><input type="text" class="form-control" id="id" v-model="id" ></div> -->
            <div class="name_form">
              <a>名前</a>
              <div class="a"><input type="text" class="form-control" id="id" v-model="name" ></div>
               <a>email</a>
                <div class="content1">
                    <input type="text" class="form-control" id="id" rows="3" v-model="email"></textarea>
                </div>
            </div>
            <div class="form-group">
                <a>パスワード</a>
                <div class="content">
                    <input type="text" class="form-control" id="id" rows="3" v-model="password"></textarea>
                </div>
            </div>
            </div>
            </form>
            <div class="button">
             <button type="button"@click="edit()" class="btn btn-primary" >登録</button>
            </div>
        <div v-if="saved" class="alert alert-primary" role="alert">
        編集しました
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            saved: false,
            users:[],
            user:[],
            id:'',
            name: '',
            email:'',
            password: '',
        }
    },
   
  
    methods: {

        edit : function() {
            axios.post(`http://127.0.0.1:8000/api/dashboard/edit`, {
            　　 name:this.name,
                email:this.email,
                password: this.password,
            })
            .then((res) => {
                console.log(res)
                this.id ='';
                this.name = '';
                this.email= '';
                this.password= '';
                this.saved = true;
                console.log('created');
            });
        }
    }
}
</script>
<style scoped>
.container{
    
    top:10%;
    position:absolute;
     color:black;
     border-color: black;  
}
.form-group{
    color:black;
    border-color: black;  
    text-align:center;   
}
.form-group input{
     border-color: black;   
}
h1{
    display:block;
    top:20%;
    text-align:center;
}
.user_id a{
    text-align: center;
}
.name a{
    text-align:center;

}
.name_form{
    padding-top:10%;
    color:black;
}

input {
  background-color: white;
  outline: solid 0.2px black;
  border-radius:10px;
}
button{
    position:absolute;
    left:50%;
    
}
.login{
  border-bottom:4px solid red;
  width:600px;
  padding:5px;
  margin:0 auto;
}
.id{
   border-bottom:4px solid red;
   width:600px;
   margin:0 auto;
   padding:10px;
}
.name{
   border-bottom:4px solid red;
   width:600px;
   margin:0 auto;
   padding:10px;
}
.title{
    width:600px;
  background-color:antiquewhite;
  border-radius:10px;
  margin:0 auto;
  top:70px;
  padding-left:210px;
}
.name_form a{
    color:black;
}
.form-group a{
    color:black;
}
</style>