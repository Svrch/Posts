<script setup>
import Header from '@/components/Header.vue';
import { usePostStore } from '@/Stores/PostStore';
import { useUsersStore } from '@/Stores/UsersStore';
import Post from '@/components/Post.vue';
import PostTemplate from '@/components/PostTemplate.vue';


const PostStore = usePostStore()
const UsersStore = useUsersStore()

const setNewPost = (el) => {
    PostStore.setNewPost(el)
    UsersStore.setNewUser()
}
</script>

<template>
    <Header @changeNewPostStatus="PostStore.newPostStatus = !PostStore.newPostStatus">
        {{ !PostStore.newPostStatus ? 'Create new post' : 'Stop creating' }}
    </Header>
    <div class="m-auto max-w-5xl ">
        <div class=" text-3xl m-4 flex justify-center">My posts</div>

        <PostTemplate
            v-if="PostStore.newPostStatus"
            @submitNewPost="setNewPost"
        >
        </PostTemplate>

        <PostTemplate
            v-if="PostStore.postEditStatus"
            :editedPost="PostStore.objToEdit"
            @submitNewPost="PostStore.setEditedPost"
        >
        </PostTemplate>

        <Post
            v-for="post of PostStore.myPosts"
            :key="post.id"
            :post="post"
            :user="UsersStore.getUser(post.userId)"
        >
            <button
                class="  mx-3 "
                @click="PostStore.editMyPost(post)"
            >
                <font-awesome-icon
                    icon="fa-regular fa-pen-to-square"
                    size="xl"
                />
            </button>
            <button
                class="  mx-3 "
                @click="PostStore.deleteMyPost(post)"
            >
                <font-awesome-icon
                    icon="fa-regular fa-circle-xmark"
                    size="xl"
                />
            </button>
        </Post>
        <div
            v-if="PostStore.likePost.length === 0"
            class=" text-2xl m-4 flex "
        >Add any post to see some here</div>
    </div>
</template>