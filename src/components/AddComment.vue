<template>
    <div>
        <h5 style="text-align: left; margin-top: 2rem; color: #999999"><em>Leave a comment...</em></h5>
        <form id="addCommentForm" @submit.prevent>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text" rows="5" v-model="newComment.text" required></textarea>
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
            if(newComment.text != '') {
                posts.addComment(newComment, postId)
                .then((response) => {
                    this.$router.go(0)
                })
                .catch(err => console.log(err))             
            }
            // reloads same page
        }
    }
}
</script>

