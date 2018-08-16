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
    add(post) {
        return axios.post('posts', post)
    }
    edit(post) {
        return axios.put(`posts/${post.id}`, post)
    }

}
export const posts = new Posts ()