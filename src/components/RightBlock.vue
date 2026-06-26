<script setup lang="ts">
import CityBox from './ui/CityBox.vue';
import SkillsPanel from './ui/SkillsPanel.vue';
import type { PropType } from 'vue';
import type { CityValue, SkillValue } from '../types.ts';

defineProps({
    city: {
        required: true,
        type: Object as PropType<CityValue>,
    },
    skills: {
        required: true,
        type: Array<SkillValue>,
    },
});
</script>

<template>
    <div class="right-block">
        <CityBox class="w-100" :name="city.name" :title="city.title"></CityBox>
        <SkillsPanel :items="skills" class="w-100"></SkillsPanel>
    </div>
</template>

<style scoped>
.right-block {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-top: 8px;
    width: 30%;
}

@media (min-width: 1440px) {
    .right-block {
        padding-bottom: 16px;
        padding-left: 16px;
    }
}

@media (max-width: 1023px) {
    .right-block {
        gap: 8px;
        padding: 0;
        padding-right: 5px;
        margin-top: 8px;
        width: auto;
    }
}
</style>
