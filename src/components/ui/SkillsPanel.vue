<script setup lang="ts">
import RetroBox from './RetroBox.vue';
import { getImageSkill } from '../../utils';
import type { SkillValue } from '../../types';

defineProps({
    items: {
        required: true,
        type: Array<SkillValue>,
    },
});
</script>

<template>
    <RetroBox class="skills-panel">
        <div v-for="item in items" class="skills-panel-item">
            <div class="skills-panel-item-image">
                <img :src="getImageSkill(item.name)" />
            </div>
            <div class="skills-panel-item-info">
                <h6>{{ item.title }}</h6>
                <p>
                    {{ item.description }}
                </p>
            </div>
        </div>
    </RetroBox>
</template>

<style scoped>
.skills-panel:deep(.retro-box-content) {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.skills-panel-item {
    display: flex;
    gap: 2px;
}
.skills-panel-item-image,
.skills-panel-item-info {
    background-image: url('../../assets/images/ui/backdrop-dark.jpg');
    border: 1px solid #7e6956;
}

.skills-panel-item-info {
    color: #ece2d1;
    display: -webkit-box;
    font-size: 13px;
    flex: 1;
    overflow: hidden;
    padding: 4px 8px;
    text-align: center;
    line-height: 1.2;
    -webkit-box-orient: vertical;
}
.skills-panel-item-info h6 {
    color: #a28f51;
    font-size: inherit;
    margin: 0;
    margin-bottom: 4px;
}
.skills-panel-item-info p {
    margin: 0;
}

.skills-panel-item-image {
    align-items: center;
    display: inline-flex;
    padding: 4px;
}
.skills-panel-item-image img {
    width: 64px;
}

@media (min-width: 320px) {
    .skills-panel-item-info {
        font-size: 10px;
    }

    .skills-panel-item-image img {
        width: 44px;
    }
}

@media (min-width: 375px) {
    .skills-panel-item-info {
        font-size: 11px;
    }
}

@media (min-width: 1024px) {
    .skills-panel-item-info {
        font-size: 12px;
    }
}

@media (min-width: 1440px) {
    .skills-panel-item-image img {
        width: 65px;
    }
    .skills-panel-item-info {
        font-size: 18px;
    }
}

@media (min-width: 1920px) {
    .skills-panel-item-image img {
        width: 80px;
    }
    .skills-panel-item-info {
        font-size: 23px;
    }
}

@media (min-width: 2560px) {
    .skills-panel-item-image img {
        width: 120px;
    }
    .skills-panel-item-info {
        font-size: 35px;
    }
}
</style>
