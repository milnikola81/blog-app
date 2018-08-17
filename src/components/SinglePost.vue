<template>
    <div class="wrapper">
        <div class="post">
            <h1 style="margin-bottom: 2rem; ">{{post.title}}</h1>
            <p style="color: #999999; margin-bottom: 3rem">Published on: {{post.createdAt}}</p>
            <p style="margin-bottom: 2rem">{{post.text}}</p>
            <h5 style="text-align: left; padding-bottom: 2rem; border-bottom: 1px solid #cccccc; color: #999999"><em>Comments...</em></h5>
            <div class="comment" v-for="(comment, index) in comments" :key="index">
                <p>{{comment.text}}</p>
                <p style="color: #999999">Added {{comment.createdAt}}</p>
            </div>
            <div class="row" style="margin-top: 2rem;">
                <AddComment :post = 'post' />
                <SuggestedPost />
            </div>
        </div>

    </div>
</template>

<script>
import { posts } from '../services/Posts'
import AddComment from '../components/AddComment.vue'
import { dateMixin } from '../mixins/DateMixin'
import SuggestedPost from '../components/SuggestedPost.vue'

export default {
    mixins: [dateMixin],
    components: {
        AddComment,
        SuggestedPost
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
            for(var i=0; i<this.post.comments.length; i++) {
                this.comments.push(this.post.comments[i])
                this.post.comments[i].createdAt = this.diffForHumans(this.post.comments[i].createdAt)
            }
            this.post.createdAt = this.formatDate(this.post.createdAt)
        })
        .catch(err => console.log(err))
    },
    beforeRouteLeave (to, from, next) {
        this.$router.go(0)
    },
    // beforeRouteEnter (to, from, next) {
    //     console.log('enter')
    // }
}
</script>

<style scoped>
.comment {
    padding: 1rem;
    background: white;
    border-bottom: 1px solid #cccccc;
}
</style>


