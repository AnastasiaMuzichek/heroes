<script setup lang="ts">

const props = defineProps({
    image: String,
    active: Boolean,
});

</script>
<template>
    <div class="card" :class="props.active ? 'card-active': ''">
        <img :src="props.image" class="card-image" ></img>
    </div>
</template>
<style scoped>
.card-image {
    outline: none;
    transition: 0.3s;
    cursor: pointer;
    transform-origin: 0 100%;
}

.card {
    background-color: aqua;
    border: 3px solid rgba(196, 186, 47, 0.986);
    box-sizing: border-box;
    display: flex;
}

.card-active,
.card:hover {
    border-color: rgb(125, 11, 170);
    scale: 1.1;
}
</style>
