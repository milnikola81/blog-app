<template>
    <div class="wrapper">
        <div class="post">
            <h3>{{post.title}}</h3>
            <p>{{post.createdAt}}</p>
            <p>{{post.text}}</p>
            <h5 style="text-align: left">Comments:</h5>
            <div class="comment" v-for="(comment, index) in comments" :key="index">
                <p>{{comment.text}}</p>
                <p>{{comment.createdAt}}</p>
            </div>
            <AddComment :post = 'post' />
        </div>
        <!-- <p>{{comments}}</p> -->

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
            for(var i=0; i<this.post.comments.length; i++) {
                this.comments.push(this.post.comments[i])
            }
            // this.$router.go(`../posts/${this.post.id}`);
            // 
        })
        .catch(err => console.log(err))
        console.log(this.comments)

        //console.log(this.comments)
    }
}
</script>

<style scoped>
.comment {
    background: white;
}
</style>


