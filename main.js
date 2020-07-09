Vue.component('static-posts', {

    template: '#static-posts-template',

    data: () => ({
        posts: []
    }),

    mounted(){
        this.getPosts();
    },

    methods: {
        getPosts(){
            this.posts = [
                {
                    "title": "The first post title"
                },
                {
                    "title": "The second post title"
                },
                {
                    "title": "The third post title"
                }
            ];
        }
    }
});

new Vue({
    el: '#app'
});