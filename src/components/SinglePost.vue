<template>
    <div>
        <h1>single post</h1>
        <h3>{{post.title}}</h3>
        <p>{{post.createdAt}}</p>
        <p>{{post.text}}</p>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    data () {
        return {
            post: {}
        }
    },
    created () {
        posts.get(this.$route.params.id)
        .then((response) => {
            this.post = response.data
        })
        .catch(err => console.log(err))
    }
}
</script>

