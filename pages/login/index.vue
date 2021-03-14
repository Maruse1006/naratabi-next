<template>
    <main id="registrationForm">
        <h1>ログイン</h1>
        <label>ユーザー名</label><br>
        <input v-model="name"><br>
        <label>パスワード</label><br>
        <input v-model="password"><br>
        <button @click="login">ログイン</button>
    </main>
</template>

<script>
import loginRepository from '../../repositories/LoginRepository' //①API

export default {
  data () {
    return {
      name: 'gunkou1006@.gmail',
      password: 'gunkou1006',
    }
  },
  methods:{
     getHeaders(token) {
     return `Bearer ${token}`
   },
     async login(){
      // v-modelで、ユーザー名と、パスワードを取得する。
      const params = {
        username: this.name,
        password: this.password,
      }


      const response = await loginRepository.login(params) //★処理をまとめる。

      const accessToken = this.getHeaders(response.data.access_token)

      //クッキーへ保存
      document.cookie = `access_token=${accessToken}`

      const token=`Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`
      console.log(token);
       }
    }

}
</script>
