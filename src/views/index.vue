<script setup>
import { usePostStore } from '@/Stores/PostStore';
import { useUsersStore } from '@/Stores/UsersStore';
import Post from '@/components/Post.vue';
import Pagination from '@/components/Pagination.vue'
import Header from '@/components/Header.vue';

const PostStore = usePostStore()
const UsersStore = useUsersStore()

const changePage = (page) => {
  if (page !== '...') {
    PostStore.page = page
  }
}
</script>

<template>
  <Header></Header>
  <div class="m-auto max-w-5xl ">
    <div class=" text-3xl m-4 flex justify-center">Posts</div>
    <Post
      v-for="post of PostStore.userPosts"
      :key="post.id"
      :post="post"
      :user="UsersStore.getUser(post.userId)"
    >
      <button
        class=" mx-3 "
        @click="PostStore.like(post)"
      ><font-awesome-icon
          icon="fa-regular fa-thumbs-up"
          size="xl"
        />
      </button>

      <button
        class=" mx-3 "
        @click="PostStore.disLike(post)"
      ><font-awesome-icon
          icon="fa-regular fa-thumbs-down"
          size="xl"
        />
      </button>
    </Post>

    <div class=" flex justify-center items-center my-3">
      <Pagination
        v-if="PostStore.posts.length !== 0"
        :itemCount=PostStore.posts.length
        :itemsPerPage=PostStore.postOnPage
        :currentPage=PostStore.page
        @changePage="changePage"
        :pageToShow="5"
      ></Pagination>
    </div>
  </div>

</template>
