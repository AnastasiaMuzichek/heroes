<script setup lang="ts">
import { ref } from 'vue';
import CardList from './components/CardList.vue';
import LeftBlock from './components/LeftBlock.vue';
import MainUnit from './components/MainUnit.vue';
import RightBlock from './components/RightBlock.vue';
import { heroes } from './constants';

const hero = ref(heroes[0]);

function onChange(index: number) {
    hero.value = heroes[index];
}
</script>

<template>
    <main>
        <div class="main-block">
            <LeftBlock
                :name="hero.name"
                :description="hero.description"
            ></LeftBlock>
            <MainUnit :full-image="hero.fullImage"></MainUnit>
            <RightBlock :city="hero.city" :skills="hero.skills"></RightBlock>
        </div>
        <CardList @change="onChange"></CardList>
    </main>
</template>

<style scoped>
main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(63, 63, 62, 0.9) 0%,
        rgba(29, 29, 28, 0.9) 59%,
        rgba(0, 0, 0, 0.9) 100%
    );
    overflow: hidden;
    padding: 10px;
    width: auto;
}

.main-block {
    box-sizing: border-box;
    display: flex;
    flex: 1;
    justify-content: center;
    overflow: hidden;
}

@media (min-width: 320px) and (max-width: 1023px) {
    .main-block {
        display: table-cell;
        vertical-align: middle;
        overflow-y: scroll;
    }
}
</style>
