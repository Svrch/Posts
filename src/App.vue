<script setup>
import { usePostStore } from '@/Stores/PostStore';
import { useUsersStore } from '@/Stores/UsersStore';
import { onMounted } from 'vue'

const PostStore = usePostStore()
const UsersStore = useUsersStore()

onMounted(async () => {
  await UsersStore.fetchUsers()
  await PostStore.fetchPosts()
  PostStore.postsAddList()
})
</script>

<template>
  <RouterView />
</template>
