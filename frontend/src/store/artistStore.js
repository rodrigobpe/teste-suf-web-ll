import { defineStore } from 'pinia'
import api from '../services/api'
import { ref } from 'vue'

export const useArtistStore = defineStore('artists', () => {
    //state
    const artists = ref([])

    const getArtists = async () => {
        const res = await api.get('/artists')
        console.log(res);
        const data = res.data
        artists.value = data
    }
    return { getArtists, artists }
})