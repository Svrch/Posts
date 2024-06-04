import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import likedposts from '@/views/likedPosts.vue'
import dislikedposts from '@/views/disLikedPosts.vue'
import myPosts from "@/views/myPosts.vue";
import deletedPosts from "@/views/deletedPosts.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/likedposts',
        name: 'likedposts',
        component: likedposts
    },
    {
        path: '/dislikedposts',
        name: 'dislikedposts',
        component: dislikedposts
    },
    {
        path: '/myposts',
        name: 'myposts',
        component: myPosts
    },
    {
        path: '/deletedposts',
        name: 'deletedposts',
        component: deletedPosts
    }]
})

export default router;
