<script setup lang="ts">
import { computed } from 'vue';
import RetroBox from './RetroBox.vue';
import { getImageHref } from '../../utils';
import type { PropType } from 'vue';
import type { CityVariant } from '../../types';

const props = defineProps({
    name: {
        default: 'castle',
        type: String as PropType<CityVariant>,
    },
    title: {
        default: 'Город Н',
        type: String,
    },
});

const image = computed(() => getImageHref(`/cities/${props.name}.webp`));
</script>

<template>
    <RetroBox>
        <div class="city-box">
            <div class="city-box-image">
                <img :src="image" />
            </div>
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
.city-box span {
    color: rgba(196, 186, 47, 0.986);
    font-weight: bold;
}
.city-box-image {
    align-items: center;
    display: flex;
    flex-shrink: 0;
}

.city-box-image img {
    width: 100%;
}

@media (min-width: 320px) {
    .city-box span {
        font-size: 14px;
    }
    .city-box-image {
        height: 55px;
        width: 55px;
    }
}

@media (min-width: 375px) {
    .city-box span {
        font-size: 16px;
    }
    .city-box-image {
        height: 55px;
        width: 55px;
    }
}

@media (min-width: 1024px) {
    .city-box span {
        font-size: 17px;
    }
    .city-box-image {
        height: 64px;
        width: 64px;
    }
}

@media (min-width: 1440px) {
    .city-box {
        gap: 16px;
    }
    .city-box span {
        font-size: 20px;
    }
    .city-box-image {
        height: 70px;
        width: 70px;
    }
}

@media (min-width: 1920px) {
    .city-box span {
        font-size: 27px;
        padding-left: 12px;
    }
    .city-box-image {
        height: 87px;
        width: 87px;
    }
}

@media (min-width: 2560px) {
    .city-box span {
        font-size: 38px;
        padding-left: 60px;
    }
    .city-box-image {
        height: 120px;
        width: 120px;
    }
}
</style>
