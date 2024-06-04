<script setup>
import { ref } from 'vue'

const emit = defineEmits(['changeNewPostStatus'])

const links = ref([
    { name: 'Posts', href: '/' },
    { name: 'My posts', href: '/myposts' },
    { name: 'Liked posts', href: '/likedposts' },
    { name: 'Disliked posts', href: '/dislikedposts' },
    { name: 'Deleted posts', href: '/deletedposts' },

])
</script>

<template>
    <div class="text-xl  sticky top-0 bg-zinc-50 border-solid border-x border-b rounded  mb-5 flex justify-center">
        <div
            class="flex justify-between"
            style="width: 1024px;"
        >
            <button
                class=" p-3 hover:bg-zinc-300"
                @click="$emit('changeNewPostStatus')"
            >
                <slot></slot>
            </button>
            <div class="p-3 inline">
                <RouterLink
                    class=" h-12 p-3 hover:bg-zinc-300"
                    v-for="link in links"
                    :key="link.name"
                    :to="link.href"
                > {{ link.name }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>