<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';
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
        <Card
            v-for="(image, idx) in images"
            class="card-item"
            @click="onClick(idx)"
            :image="image"
            :active="idx === index"
        ></Card>
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    overflow-x: auto;
    padding: 8px 0;
}
</style>
