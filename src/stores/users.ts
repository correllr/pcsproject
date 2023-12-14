import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import backend from '@/backend/db-connection.php'
// import providersData from '@/data/db.json'

const userDataUrl = 'https://my-json-server.typicode.com/correllr/pcsproject/users'
// const userDataUrl = '../backend/db-connection.php'
const usersData:any = await axios.get(userDataUrl).catch(error => {
    console.log(error)
  })
    
  export const useUsersStore = defineStore('users', { 
    state: () => ({

        message: "Some text",
        users: usersData

    })
    // getters: {
    //   listBeroepen(state) {
    //     return [...new Set(state.usersArray.map((item:any) => item.user_name))];
    //   }
    // }
})
