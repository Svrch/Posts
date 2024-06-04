<script setup>
import Header from '@/components/Header.vue';
import { usePostStore } from '@/Stores/PostStore';
import { useUsersStore } from '@/Stores/UsersStore';
import Post from '@/components/Post.vue';

const PostStore = usePostStore()
const UsersStore = useUsersStore()

</script>

<template>
    <Header></Header>
    <div class="m-auto max-w-5xl ">
        <div class=" text-3xl m-4 flex justify-center">Disliked posts</div>
        <Post
            v-for="post of PostStore.disLikePost"
            :key="post.id"
            :post="post"
            :user="UsersStore.getUser(post.userId)"
        >
            <button
                class=" px-3 mx-3 "
                @click="PostStore.remove(post)"
            ><font-awesome-icon
                    icon="fa-regular fa-circle-xmark"
                    size="xl"
                /></button>
        </Post>
        <div
            v-if="PostStore.disLikePost.length === 0"
            class=" text-2xl m-4 flex "
        >Dislike any post to see some here</div>

    </div>
</template>