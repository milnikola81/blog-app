<template>
    <div class="wrapper">
        <h1 style="padding-top: 1rem; padding-bottom: 1rem"><strong>App Posts | Vue Project</strong></h1>
        <div class="post" v-for="(post, index) in posts" :key="index">
            <h2 style="margin-bottom: 2rem">{{post.title}}</h2>
            <p style="color: #999999">Comments: {{post.comments.length}}</p>
            <p style="color: #999999; margin-bottom: 2rem">Published on {{post.createdAt}}</p>
            <p style="margin-bottom: 2rem">{{post.text}}</p>
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
import { dateMixin } from '../mixins/DateMixin'

export default {
    mixins: [dateMixin],
    data () {
        return {
            posts: []
        }
    },
    methods: {
        deletePost(post) {
            let confirmed = confirm('Are you sure you want to delete this post?')
            if(confirmed) {
                let index = this.posts.findIndex(single => single.id === post.id)
                posts.deletePost(post)
                .then((response) => {
                    this.posts.splice(index, 1)
                })
            }
        }
    },
    created () {
        posts.getAll()
        .then((response) => {
            this.posts = response.data
            for(var i = 0; i < this.posts.length; i++) {
                this.posts[i].createdAt =  this.formatDate(this.posts[i].createdAt)
            }
        })
    }
}
</script>

<style scoped>
#AppPosts {
    padding: 2rem;
}
h1 {
    font-family: 'Arial', sans-serif;
}

</style>


