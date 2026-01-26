<script setup lang="ts">
import Arrow from './Arrow.vue';
import type { Skill } from '../constants';

const props = defineProps({
    city: String,
    cityImage: String,
    skills: Array<Skill>,
});
</script>

<template>
    <div class="information-block">
        <div class="information-block-wrapper">
            <div class="city">
                <img :src="cityImage" />
                <span>{{ `Замок: ${city}` }}</span>
            </div>
        </div>
        <Arrow :horizontal="50" class="arrow-top"></Arrow>
        <Arrow :horizontal="50" class="arrow-bottom"></Arrow>
        <div class="information-block-wrapper">
            <div v-for="skill in props.skills" class="skill">
                <img :src="skill.image" style="height: 50px; width: 50px;"></img>
                <p>{{ skill.description }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
.information-block {
    min-width: 50px;
    display: flex;
    flex-direction: column;
    height: 440px;
    width: 500px;
}

.information-block-wrapper {
    padding: 8px;
}
    .information-block-wrapper:has(.city) {
        padding-bottom: 0;
    }
    .information-block-wrapper:has(.skill) {
        padding-top: 0;
    }

.arrow-top {
    transform: rotateX(180deg);
    width: 100px;
}

.arrow-bottom {
    width: 100px;
}

.city {
    align-items: center;
    border: 2px solid rgb(125, 11, 170);
    display: flex;
    gap: 8px;
    padding: 4px;
}
    .city img {
        display: inline-block;
    }
    .city span {
        font-size: 17px;
        color: rgba(196, 186, 47, 0.986);
        font-weight: bold;
    }


.cityName {
    font-size: 13px;
    font-family: 'Crimson Text SemiBold';
    font-weight: bold;
    display: inline-block;
    justify-content: center;
    align-items: center;
}

.skill {
    align-items: center;
    border: 2px solid rgb(125, 11, 170);
    display: flex;
    gap: 8px;
    padding: 4px;
    margin-bottom: 3px;
    
}

p {
    font-size: 13px;
    color: white;
}
</style>
