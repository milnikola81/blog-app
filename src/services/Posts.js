import axios from 'axios'
// importujem axios

export default class Posts {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:3000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('posts')
    }
    get(id) {
        return axios.get(`posts/${id}`)
    }

}
export const posts = new Posts ()