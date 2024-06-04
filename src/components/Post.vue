<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true,
        default: () => { },
    },
    user: {
        type: Object,
        required: false,
        default: () => { },
    },

})
</script>

<template>
    <div
        class="border border-zinc-300 min-h-36 shadow-md mb-8  flex justify-between items-center   rounded-lg bg-zinc-50">
        <div class=" ">
            <div class="  text-xl  px-3"> {{ user.name }} </div>
            <!-- знак вороса, чтобы не было ошибки  {{ user?.name }}  -->
            <hr class=" border-1">
            <div class=" text-xl  px-3"> {{ post.id }} {{ post.title }} </div>
            <div class=" max-w-3xl px-3"> {{ post.body }}</div>
        </div>
        <div class=" my-2 min-w-48 flex justify-center">
            <slot></slot>
        </div>
    </div>
</template>