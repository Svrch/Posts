<script setup>
import { computed } from 'vue'

const emit = defineEmits(['changePage'])

const props = defineProps({
    itemCount: {
        type: Number,
        default: 5,
        required: true
    },
    itemsPerPage: {
        type: Number,
        default: 5
    },
    currentPage: {
        type: Number,
        default: 1,
        required: true
    },
    pageToShow: {
        type: Number,
        default: 5,
        required: false
    }
})

const totalPage = computed(() => (Math.ceil(props.itemCount / props.itemsPerPage)))

const pages = computed(() => { return (Array.from({ length: totalPage.value }, (_, i) => i + 1)) })

const pagesToShow = (pages, currentPage, pageToShow) => {

    let left = Math.floor(currentPage - pageToShow / 2)
    let right = Math.floor(currentPage + pageToShow / 2)

    let arrToShow = pages.slice(left, right)

    if (left < 0) { arrToShow = Array.from({ length: pageToShow }, (_, i) => i + 1) }
    if (right > totalPage.value) { arrToShow = Array.from({ length: pageToShow }, (_, i) => i + totalPage.value - pageToShow + 1) }

    return arrToShow
}

</script>

<template>

    <div class=" flex justify-center  my-3">
        <button
            :class="[' w-9 px-1 mx-1 rounded ',]"
            @click="$emit('changePage', currentPage = 1)"
        >
            Start
        </button>

        <button
            :class="['  w-32 px-1 mx-1 rounded ',]"
            @click="$emit('changePage', currentPage <= 1 ? currentPage : currentPage -= 1)"
        >
            Page Down
        </button>

        <button
            v-for="page in pagesToShow(pages, currentPage, pageToShow)"
            :key="page"
            @click="$emit('changePage', page)"
            :class="['  w-7 px-1 mx-1 rounded ', { 'bg-green-400': page === currentPage }, { ' pointer-events-none': page === '...' }]"
        >
            {{ page }}
        </button>

        <button
            :class="['  w-32 px-1 mx-1 rounded ',]"
            @click="$emit('changePage', currentPage >= totalPage ? currentPage : currentPage += 1)"
        >
            Page Up
        </button>

        <button
            :class="['  w-7 px-1 mx-1 rounded ',]"
            @click="$emit('changePage', currentPage = totalPage)"
        >
            Last
        </button>

    </div>
</template>