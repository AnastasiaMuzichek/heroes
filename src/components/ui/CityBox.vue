<script setup lang="ts">
import { computed } from 'vue';
import RetroBox from './RetroBox.vue';
import { getImageHref } from '../../utils';
import type { PropType } from 'vue'
import type { CityVariant } from '../../types';

const props = defineProps({
    name: {
        default: 'castle',
        type: String as PropType<CityVariant>
    },
    title: {
        default: 'Город Н',
        type: String
    }
})

const image = computed(() => getImageHref(`/cities/${props.name}.webp`))
</script>

<template>
    <RetroBox>
        <div class="city-box">
            <img :src="image" />
            <span>{{ title }}</span>
        </div>
    </RetroBox>
</template>

<style scoped>
.city-box {
    align-items: center;
    display: flex;
    gap: 8px;
}
    .city-box img {
        height: 64px;
    }
    .city-box span {
        font-size: 17px;
        color: rgba(196, 186, 47, 0.986);
        font-weight: bold;
    }
</style>