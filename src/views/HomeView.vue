<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { useProviderStore } from '@/stores/providers'
import { RouterLink } from 'vue-router'

const store = useProviderStore()
const providers = store.providersArray
let selectedBeroep:any = ref("")
let providersGroup:any = ref(providers)


function selectBeroep(beroep:any) {
  selectedBeroep = beroep.toLowerCase();
  if(selectedBeroep.length != 0) {
    providersGroup.value = providers.filter((p:any) => p.beroep.toLowerCase()  == selectedBeroep)
  } else {
    providersGroup.value = providers
  }
}
  
</script>

<template>
  <main>
    <header>
      <h1>PCS Providers Nijmegen</h1>
    </header>

    <div id="button-container">
      <button @click="selectBeroep('')">All</button>
      <button v-for="uniqueBeroep in store.listBeroepen" @click="selectBeroep(uniqueBeroep)">{{ uniqueBeroep}}</button>
    </div>
    

    <ul>
      
      <li v-for="provider in providersGroup" :key=provider.id> <!-- NOT UPDATING -->
        <RouterLink :to="`/provider/${provider.id}`">
          {{ provider.name }}, {{  provider.beroep }}
        </RouterLink>
      </li>
     
    </ul>

    
  </main>
</template>

<style scoped>
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }
  a, a:visited {
    color: rgb(99, 153, 101);
  }
  #button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem;
  }
  button {
    border:none;
    box-shadow: none;
    color: white;
    background-color: rgb(99, 153, 101);
    padding: 0.5rem;
    cursor: pointer;
  }
</style>


