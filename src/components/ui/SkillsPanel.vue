<script setup lang="ts">
import RetroBox from './RetroBox.vue';
import { getImageHref } from '../../utils.ts'

type Skill = {
    name: string;
    description: string;
    title: string;
};

defineProps({
    items: {
        required: true,
        type: Array<Skill>
    }
})
</script>

<template>
    <RetroBox class="skills-panel">
        <div v-for="item in items" class="skills-panel-item">
            <div class="skills-panel-item-image">
                <img :src="getImageHref('/skills/' + item.name + '.webp')" />
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
            /* max-height: 48px; */
            overflow: hidden;
            padding: 4px 8px;
            text-align: center;
            /* text-overflow: ellipsis; */
            /* -webkit-line-clamp: 3; */
            /* line-clamp: 3; */
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
            display: inline-flex;
            padding: 4px;
        }
            .skills-panel-item-image img {            
                width: 48px;
            }
</style>