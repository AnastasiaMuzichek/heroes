<script setup lang="ts">
import NameHero from './NameHero.vue';

const props = defineProps({
    fullImage: String,
});
</script>

<template>
    <NameHero></NameHero>
    <div class="main-page">
        <img :src="fullImage" ></img>
       
    </div>
    
</template>

<style scoped>
.main-page {
    background-position: center;
    display: flex;
    justify-content: center;
} 

</style>
