<template>
    <div>
        <h5 style="text-align: left">Leave a comment</h5>
        <form id="addCommentForm" @submit.prevent>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text" rows="10" v-model="newComment.text"></textarea>
            </div> 
            <button class="btn btn-success" @click="addComment(newComment, post.id)" >Submit</button>
            <input class="btn btn-danger" type="reset" value="Reset" />
        </form>
        <!-- <p>{{post}}</p> -->
        <!-- <p>{{post.id}}</p> -->

    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    props: ['post'],
    data () {
        return {
            newComment: {}
        }
    },
    methods: {
        addComment(newComment, postId) {
            posts.addComment(newComment, postId)
            this.$router.go(0)
            // reloads same page
        }
    }
}
</script>

