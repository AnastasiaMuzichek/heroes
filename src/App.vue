<script setup lang="ts">
import { ref } from 'vue';
import CardList from './components/CardList.vue';
import LeftBlock from './components/LeftBlock.vue';
import MainUnit from './components/MainUnit.vue';
import RightBlock from './components/RightBlock.vue';
import { heroes } from './constants';

const hero = ref(heroes[0]);

function onChange(index: number) {
    console.log(index);
    hero.value = heroes[index];
}
</script>

<template>
    <main>
        <div style="flex: 1" class="main-block">
            <LeftBlock
                :name="hero.name"
                :description="hero.description"
            ></LeftBlock>
            <MainUnit :full-image="hero.fullImage"></MainUnit>
            <RightBlock
                :city="hero.city"
                :city-image="hero.cityImage"
                :skills="hero.skill"
            ></RightBlock>
        </div>
        <CardList @change="onChange"></CardList>
    </main>
</template>

<style scoped>
main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 90vh;
    background: linear-gradient(
        90deg,
        rgba(63, 63, 62, 0.9) 0%,
        rgba(29, 29, 28, 0.9) 59%,
        rgba(0, 0, 0, 0.9) 100%
    );
    overflow: hidden;
    padding: 10px;
}
.block {
    align-items: flex-start;
    background: linear-gradient(
        90deg,
        rgba(63, 63, 62, 0.9) 0%,
        rgba(29, 29, 28, 0.9) 59%,
        rgba(0, 0, 0, 0.9) 100%
    );
    box-sizing: border-box;
    display: flex;
    gap: 10px;
    height: 90vh;
    justify-content: center;
    opacity: 0.9;
    padding: 10px;
}

.main-block {
    display: flex;
    justify-content: center;
}
</style>
