<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'rgb(125, 11, 170)',
    },
    horizontal: {
        default: 70,
        type: Number,
    },
});

const hLengt = computed(() => {
    if (props.horizontal >= 10 && props.horizontal <= 90) {
        return props.horizontal;
    } else {
        return 70;
    }
});

const points = computed(() => {
    const h = 95 - hLengt.value;
    return `5,5 ${hLengt.value},5 ${hLengt.value},5 95,${h} 95`;
});
</script>

<template>
    <svg viewBox="0 0 100 50" width="200">
        <polyline
            :points="points"
            class="arrow-line"
            :stroke="props.color"
        ></polyline>
    </svg>
</template>
<style lang="css" scoped>
.arrow-line {
    fill: none;
    stroke-width: 3px;
    stroke-linecap: round;
}
</style>
