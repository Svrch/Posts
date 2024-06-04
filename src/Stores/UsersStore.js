import { defineStore } from "pinia";
import { ref } from 'vue'

const URL_CONST = "https://jsonplaceholder.typicode.com/users"

const myUser = ref({
    name: 'John',
    id: 0,
})

export const useUsersStore = defineStore('UsersStore', () => {

    const users = ref([])

    const setNewUser = () => {
        if (typeof (users.value.find((el) => el.id === myUser.value.id)) === "undefined") {
            users.value.push(myUser.value)
        }
    }

    const fetchUsers = async () => {
        try {
            const res = await fetch(URL_CONST)
            const data = await res.json()
            users.value = data
        } catch (err) {
            console.log(err);
        }
    }

    const getUser = (id) => {
        return users.value.find((el) => id === el.id)
    }

    return { fetchUsers, users, getUser, setNewUser }
})