import Repository,{getAccessToken} from './Repository'

export default {
    getUser (guideId = null) {
        Repository.defaults.headers.get['Authorization'] = getAccessToken()
        return Repository.get(`/user/${guideId}`)
    }
}
