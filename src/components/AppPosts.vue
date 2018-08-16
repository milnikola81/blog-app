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
            <router-link :to="{ name: 'single-post', params: {id: post.id}}">
                <button type="button" class="btn btn-info">Show post</button>
            </router-link>
            <router-link :to="{ name: 'edit-post', params: {id: post.id}}">
                <button type="button" class="btn btn-warning">Edit post</button>
            </router-link>
            <button type="button" class="btn btn-danger" @click="deletePost(post)">Delete post</button>
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
    methods: {
        deletePost(post) {
            let index = this.posts.findIndex(single => single.id === post.id)
            posts.deletePost(post)
            .then((response) => {
                this.posts.splice(index, 1)
            })
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
    padding: 1rem;
    background: #d9f2f0;
}
.post p {
    text-align: left;
}
</style>


