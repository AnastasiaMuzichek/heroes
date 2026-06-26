<script setup lang="ts">
import { ref } from 'vue';
import CardСharacter from './CardСharacter.vue';
import { heroes } from '../constants';

const emit = defineEmits<{
    (event: 'change', index: number): void;
}>();

const index = ref(0);

const images = heroes.map((hero) => hero.image);

function onClick(indexValue: number) {
    index.value = indexValue;
    emit('change', index.value);
}
</script>

<template>
    <div class="card-list">
        <CardСharacter
            v-for="(image, idx) in images"
            class="card-item"
            @click="onClick(idx)"
            :image="image"
            :active="idx === index"
        ></CardСharacter>
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 8px 0;
    overflow: auto;
}

@media (min-width: 320px) {
    .card-list {
        gap: 10px;
        overflow-x: scroll;
        padding: 8px;
        justify-content: start;
    }
}

@media (min-width: 1024px) {
    .card-list {
        gap: 11px;
        overflow-x: hidden;
        justify-content: center;
    }
}
@media (min-width: 1440px) {
    .card-list {
        gap: 20px;
        padding: 8px 0;
    }
}

@media (min-width: 2560px) {
    .card-list {
        gap: 25px;
    }
}
</style>
