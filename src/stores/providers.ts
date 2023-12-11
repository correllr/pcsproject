import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import providersData from '@/data/db.json'

const providerDataUrl = 'https://my-json-server.typicode.com/correllr/PCSproviders/providers'
const providersData:any = await axios.get(providerDataUrl).catch(error => {
    console.log(error)
  })
    

export const useProviderStore = defineStore('providers', { 
    state: () => ({
        providersArray: providersData.data
    }),
    getters: {
      listBeroepen(state) {
        return [...new Set(state.providersArray.map((item:any) => item.beroep))];
      }
    }
})
