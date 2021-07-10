import axios from 'axios'

const baseDomain = '127.0.0.1:8000'
const baseURL = `http://${baseDomain}`
const repository = axios.create({
    baseURL: baseURL
})

repository.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // ★ここで、エラーの時の処理をかく（ログインページに戻すとか）
    if (error.response.status == "401") {
        console.log('ログインに失敗しました')
        //401の時の処理をここに書く
        location.replace('/error');
         }
    return error.response;
});

   
  

export default repository

// 保存しているアクセストークンを取得するメソットを準備
export function getAccessToken() {
    return `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`
}
