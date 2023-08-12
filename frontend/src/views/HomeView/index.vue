<script setup>
import {useArtistStore} from '../../store/artistStore'

const store = useArtistStore()
store.getArtists()

</script>

<template>
    <ul>
        <li v-for="artist in store.artists" :key="artist.id">{{ artist.name }} - {{ artist.id }}</li>
    </ul>
</template>


<style>

</style>