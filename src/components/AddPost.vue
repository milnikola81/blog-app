<template>
    <div>
        <h1>Add Post</h1>
        <form id="addPostForm" @submit.prevent>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Post title here..." v-model="newPost.title">
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text" rows="10" v-model="newPost.text"></textarea>
            </div>
            <button class="btn btn-primary" @click="addPost(newPost)" >Submit</button>
            <input class="btn btn-danger" type="reset" value="Reset" />
        </form>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    data () {
        return {
            newPost: {}
        }
    },
    methods: {
        addPost(newPost) {
            posts.add(newPost)
            .then((response) => {
                this.$router.push('posts')
            })
            .catch(err => console.log(err))
        }
    }
    
}
</script>

<style scoped>
form {
    width: 80%;
    margin: 0 auto;
}
button {
    margin-right: 2rem;
}
</style>


