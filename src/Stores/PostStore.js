import { defineStore } from "pinia";
import { ref, computed } from 'vue'

const URL_CONST = "https://jsonplaceholder.typicode.com/posts"

export const usePostStore = defineStore('PostStore', () => {

    const postOnPage = ref(3)

    const posts = ref([])
    const pageAmount = computed(() => posts.length)

    const page = ref(1)
    const postEditStatus = ref(false)

    const fetchPosts = async () => {
        try {
            const res = await fetch(URL_CONST)
            const data = await res.json()
            posts.value = data
        } catch (err) {
            console.log(err);
        }
    }

    const like = (obj) => {
        posts.value.find((el) => el.id === { ...obj }.id).list = 'like';
    }

    const disLike = (obj) => {
        posts.value.find((el) => el.id === { ...obj }.id).list = 'dislike';
    }

    const remove = (obj) => {
        posts.value.find((el) => el.id === { ...obj }.id).list = 'list';
    }

    const deleteMyPost = async (obj) => {
        posts.value.find((el) => el.id === { ...obj }.id).list = 'deleted';
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data)
    }

    const postsNew = () => posts.value.map(el => {
        el.list = 'list'
        return el
    })

    const objToEdit = ref({})

    const editMyPost = (obj) => {
        postEditStatus.value = !postEditStatus.value
        objToEdit.value = { ...posts.value.find((el) => el.id === { ...obj }.id) }
    }

    const postsAddList = () => posts.value.map(el => { el.list = 'list' })

    const likePost = computed(() => posts.value.filter((el) => el.list === 'like'))

    const disLikePost = computed(() => posts.value.filter((el) => el.list === 'dislike'))

    const userPosts = computed(() => posts.value.filter((el) => el.list === 'list').slice(page.value * postOnPage.value - postOnPage.value, page.value * postOnPage.value))
    // номер пользователя 0 (может быть другой номер) -----------------------V
    const myPosts = computed(() => posts.value.filter((el) => (el.userId === 0 && el.list !== 'deleted')))

    const deletedPosts = computed(() => posts.value.filter((el) => el.list === 'deleted'))


    const newPostStatus = ref(false)

    const setNewPost = async (el) => {
        let obj = { ...el }
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: obj.title,
                body: obj.body,
                userId: 0,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        data.list = 'list'
        posts.value.push(data)
        newPostStatus.value = false
        console.log(data)
    }

    const setEditedPost = async (el) => {
        let idx = { ...el }.id
        const pos = posts.value.map(e => e.id).indexOf(idx);
        console.log('pos:', pos);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: el.id,
                title: el.title,
                body: el.body,
                userId: el.title,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const data = await response.json()
        data.id = el.id

        if (pos !== -1) {
            posts.value[pos].body = data.body
            posts.value[pos].title = data.title
        }
        postEditStatus.value = !postEditStatus.value
    }

    return {
        posts, fetchPosts, userPosts, page, like, postsNew, likePost, disLike, disLikePost, remove, pageAmount, postOnPage,
        deleteMyPost, postsAddList, editMyPost, postEditStatus, objToEdit, myPosts, deletedPosts, setNewPost, newPostStatus,
        setEditedPost
    }
})