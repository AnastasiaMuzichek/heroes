<script setup lang="ts">
import RetroBox from './ui/RetroBox.vue';

const props = defineProps({
    name: String,
    description: String,
});
</script>

<template>
    <div class="left-block">
        <RetroBox>
            <h2 class="hero-name">{{ props.name }}</h2>
            <p class="hero-description">{{ props.description }}</p>
        </RetroBox>
    </div>
</template>

<style scoped>
.left-block {
    padding-right: 8px;
    padding-top: 8px;
    z-index: 2;
    width: 30%;
}

.hero-name {
    font-family: Impact, fantasy;
    margin-top: 0;
    color: rgba(196, 186, 47, 0.986);
    font-size: 22px;
    text-align: center;
}

.hero-description {
    background-image: url('../assets/images/ui/backdrop-dark.jpg');
    border: 1px solid #7e6956;
    color: #ece2d1;
    font-size: 13.3px;
    margin: 0;
    padding: 2px;
    text-align: center;
}

@media (min-width: 320px) {
    .hero-name {
        font-size: 15px;
    }

    .hero-description {
        font-size: 10px;
    }
}

@media (min-width: 425px) {
    .hero-name {
        font-size: 17px;
    }

    .hero-description {
        font-size: 11px;
    }
}

@media (min-width: 768px) {
    .hero-name {
        font-size: 20px;
    }

    .hero-description {
        font-size: 12px;
    }
}

@media (min-width: 1024px) {
    .hero-name {
        font-size: 18px;
    }
}

@media (min-width: 1440px) {
    .left-block {
        padding-right: 14px;
    }

    .hero-name {
        font-size: 25px;
    }

    .hero-description {
        font-size: 17.5px;
    }
}

@media (min-width: 1920px) {
    .left-block {
        padding-right: 24px;
    }

    .hero-name {
        font-size: 40.5px;
    }

    .hero-description {
        font-size: 24px;
    }
}

@media (min-width: 2560px) {
    .hero-name {
        font-size: 60px;
    }

    .hero-description {
        font-size: 32px;
    }
}

@media (max-width: 1023px) {
    .left-block {
        padding-right: 5px;
        margin-bottom: 8px;
        width: auto;
    }
}
</style>
