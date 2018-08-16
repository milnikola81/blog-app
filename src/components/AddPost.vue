<template>
    <div>
        <h1 v-if="(!this.$route.params.id)">Add post</h1>
        <h1 v-else>Edit post</h1>
        <form id="addPostForm" @submit.prevent>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Post title here..." v-model="newPost.title" required minlength="2">
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text" rows="10" v-model="newPost.text" required maxlength="300"></textarea>
            </div>
            <button v-if="(this.$route.params.id)" class="btn btn-success" @click="edit(newPost)" >Done</button>  
            <button v-else class="btn btn-success" @click="addPost(newPost)" >Submit</button>
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
        },
        edit(post) {
            posts.edit(post)
            .then((response) => {
                this.$router.push('../posts')
            })
            .catch(err => console.log(err))
        }
    },
    created () {
        if(this.$route.params.id) {
            posts.get(this.$route.params.id)
            .then(response => (this.newPost = response.data));
        }
        else if(!this.$route.params.id) {
            this.newPost = {};
        }
    }
    
}
</script>

<style scoped>
form {
    width: 80%;
    margin: 0 auto;
}

</style>


