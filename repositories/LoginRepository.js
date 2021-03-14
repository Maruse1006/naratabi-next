import repository from './Repository'

export default {
    login (params = null) {
        console.log(params)
        //※oauth/tokenへpostするデータ
        const postData = {
            grant_type: 'password',
            client_id: '2',
            client_secret: 'ABHLAjb8PGJSOiiehlmODaE2C3v2NF61fXp7l1E1',//シークレットID
            username: params.username,
            password: params.password,
        }
        return repository.post(`/oauth/token`, postData)
    }
}
