<template>
    <div class="col-md-7">
        <h5 style="text-align: left; color: #999999"><em>Leave a comment...</em></h5>
        <form id="addCommentForm" @submit.prevent>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text" rows="5" v-model="newComment.text" required></textarea>
            </div>
            <!-- <div class="g-recaptcha" 
            data-sitekey="6LeJgGoUAAAAAIMOvWa9uiAF4xlaaPiQF8pwZTxO" style="margin-bottom: 1rem"></div> -->
            <vue-recaptcha sitekey="6LeJgGoUAAAAAIMOvWa9uiAF4xlaaPiQF8pwZTxO">
            </vue-recaptcha>
            <button class="btn btn-success" @click="addComment(newComment, post.id)" style="margin-top: 1rem">Submit</button>
            <input class="btn btn-danger" type="reset" value="Reset" style="margin-top: 1rem"/>
        </form>

    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import { posts } from '../services/Posts'

export default {
    components: { 
        VueRecaptcha 
    },
    props: ['post'],
    data () {
        return {
            newComment: {}
        }
    },
    methods: {
        addComment(newComment, postId) {
            if (grecaptcha.getResponse() != '') {
                if(newComment.text != '') {
                    posts.addComment(newComment, postId)
                    .then((response) => {
                        this.$router.go(0)
                    })
                    .catch(err => console.log(err))             
                }
            }
            else {
                alert ('Please check your reCaptcha.')
            }
            // reloads same page
        }
    }
}
</script>

