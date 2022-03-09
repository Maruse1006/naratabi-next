// export default function ({ $config }) {
//     consle.log($config.baseURL)
//    }

import axios from 'axios'

export default function({ $axios }) {
  $axios.onRequest((config) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'auth._token.local'
    )
    return config
  })
}
// axiosにデフォルトでヘッダーにAuthorizationを用意し、中身はlogalStorageのtokenを貼り付けるよ
// onRequest リクエスト飛ばす前に処理いれるよ
// common はすべてのリクエストGET,POST....につけるよ

// router.get("/api/me", (req, res) => {
//     const headers = req.headers; //追記
//     console.log(headers); //追記
//     const bearToken = req.headers["authorization"];
//     const bearer = bearToken.split(" ");
//     const token = bearer[1];
  
//     jwt.verify(token, "secret", (error, user) => {
//       if (error) {
//         return res.sendStatus(403);
//       } else {
//         return res.json({
//           user,
//         });
//       }
//     });
//   });