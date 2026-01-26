<script setup lang="ts">

defineProps({
    fullImage: String,
});
</script>

<template>
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
