<template>
    <div id="AppPosts">
        <h1>app posts</h1>
        <div class="post" v-for="(post, index) in posts" :key="index">
            <h1>{{post.title}}</h1>
            <router-link :to="{ name: 'single-post', params: {id: post.id}}">
                Show post
            </router-link>
            <p>{{post.createdAt}}</p>
            <p>{{post.text}}</p>
        </div>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    data () {
        return {
            posts: []
        }
    },
    created () {
        posts.getAll()
        .then((response) => {
            this.posts = response.data
        })
    }
}
</script>

<style scoped>
#AppPosts {
    padding: 2rem;
}
.post {
    margin-top: 2rem;
}
.post p {
    text-align: left;
}
</style>


