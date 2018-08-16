<template>
    <div>
        <h1>single post</h1>
        <h3>{{post.title}}</h3>
        <p>{{post.createdAt}}</p>
        <p>{{post.text}}</p>
        <p v-for="(comments, index) in comments" :key="index">{{comment.text}}</p>
        <AddComment :post = 'post' />
        <!-- <p>{{post.comments}}</p> -->

    </div>
</template>

<script>
import { posts } from '../services/Posts'
import AddComment from '../components/AddComment.vue'

export default {
    components: {
        AddComment
    },
    data () {
        return {
            post: {},
            comments: []
        }
    },
    created () {
        posts.get(this.$route.params.id)
        .then((response) => {
            this.post = response.data
            this.post.comments = this.comments
        })
        .catch(err => console.log(err))

        console.log(this.comments)
    }
}
</script>

