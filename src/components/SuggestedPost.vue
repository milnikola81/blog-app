<template>
    <div class="col-md-5">
        <h5 style="color: #999999"><em>Suggested post...</em></h5>
        <div class="post" style="border: 1px solid #ced4da">
            <h5 style="margin-bottom: 1rem">{{post.title}}</h5>
            <p style="margin-bottom: 1rem">{{post.text}}</p>
            <p>              
                <!-- <router-link :to="{ name: 'single-post', params: {id: post.id} }">Show -->
                    <button @click="changePost(post.id)">Show post</button>
                <!-- </router-link> -->
            </p>
        </div>
    </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    data () {
        return {
            post: {}
        }
    },
    created () {
        posts.getAll()
        .then((response) => {
            let newArray = []
            for(let i = 0; i < response.data.length; i++) {
                if (response.data[i].id != this.$route.params.id) {
                    newArray.push(response.data[i])
                }
            }
            this.post = newArray[(Math.floor(Math.random() * newArray.length))]
        })
    },
    methods: {
        changePost(redirectId) {
            this.$emit('clicked', redirectId)
            // emits new id to parent for refreshing component with new id
        }
    }

    
}
</script>

