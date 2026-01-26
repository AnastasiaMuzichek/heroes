<script setup lang="ts">
const props = defineProps({
    name: String,
    description: String,
});
</script>

<template>
    <div class="left-block">
        <h2 class="name">{{ props.name }}</h2>
        <div class="main-arrow"></div>
        <p class="description">{{ props.description }}</p>
    </div>
</template>

<style scoped>
.left-block {
    width: 500px;
    height: 440px;
    min-width: 50px;
    position: relative;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
}
.left-block .name {
    align-self: flex-start;
    font-family: Impact, fantasy;
    margin-left: 15px;
    color: rgba(196, 186, 47, 0.986);
}

.main-arrow {
    border: 3px solid rgb(125, 11, 170);
    border-bottom-width: 0;
    border-left-width: 0;
    margin-right: 28px;
    padding: 20px;
    transform: skew(45deg);
    width: calc(100% - 98px);
}

.description {
    font-size: 14px;
    margin-left: 5px;
    margin-right: 7px;
    align-items: center;
    border: 2px solid rgb(125, 11, 170);
    display: flex;
    padding: 4px;
    color: white;
}
</style>
