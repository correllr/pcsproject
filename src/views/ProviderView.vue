<template>
    <main>
        <h1>
            {{ provider.name }}, {{ provider.beroep }}
        </h1>
        <h3>
            {{ provider.locatie }}
        </h3>
        <p>
            Persoonlijk contact: {{  provider.persoonlijk }}
        </p>
    </main>
    
</template>

<script setup>
    import { computed, reactive } from 'vue'
    import { useRoute } from 'vue-router'
    import { useProviderStore } from '@/stores/providers'
    
    const route = useRoute()

    const store = useProviderStore()
    const providers = reactive(store.providersArray)
    const provider = providers.find((p) => p.id === route.params.id)
 
    
    


</script>