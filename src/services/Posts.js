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
    // `api/posts/{id}?filter={"include":["comments"]}` 
    get(id) {
        return axios.get(`posts/${id}?filter={"include":["comments"]}`)
    }
    // get(id) {
    //     return axios.get(`posts/${id}`)
    // }
    add(post) {
        return axios.post('posts', post)
    }
    edit(post) {
        return axios.put(`posts/${post.id}`, post)
    }
    deletePost(post) {
        return axios.delete(`posts/${post.id}`)
    }
    addComment(comment, postId) {
        //console.log(comment.text, post_id)
        return axios.post(`posts/${postId}/comments`, comment)
    }

}
export const posts = new Posts ()