<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submitNewPost'])

const props = defineProps({
    editedPost: {
        type: Object,
        required: false,
        default: {
            id: '',
            title: '',
            body: ''
        }
    }
})

const newPost = ref({
    name: 'John',
    userId: 0,
    id: props.editedPost.id,
    list: 'list',
    title: props.editedPost.title,
    body: props.editedPost.body
})

</script>

<template>
    <div class=" text-3xl m-4 flex justify-center">New Post</div>
    <div class=" shadow-md mb-8   border border-zinc-300 rounded-lg bg-zinc-50">
        <div class=" flex flex-col ">
            <div class="  text-xl  px-3 my-5"> Post title </div>
            <input
                v-model="newPost.title"
                class=" p-2 mb-5 mx-5 block outline-none border   text-xl  "
            >
            <div class="  text-xl  px-3 mb-5"> Post body </div>
            <textarea
                v-model="newPost.body"
                class="p-2 h-36  mb-5 mx-5 resize-none outline-none text-xl border"
            > </textarea>
        </div>
        <div class="flex justify-end">
            <button
                class=" mb-3 px-3 mx-3 border-solid border-2 rounded border-green-500 "
                @click="$emit('submitNewPost', newPost)"
            >Submit Post</button>
        </div>
    </div>
</template>