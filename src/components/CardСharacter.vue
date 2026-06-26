<script setup lang="ts">
const props = defineProps({
    image: String,
    active: Boolean,
});
</script>

<template>
    <div class="card" :class="props.active ? 'card-active' : ''">
        <img :src="props.image" />
    </div>
</template>

<style scoped>
.card {
    background-color: aqua;
    box-sizing: border-box;
    display: flex;

    align-self: flex-start;
    background-color: #000;
    border: 2px solid #a58c42;
    padding: 2px;
}

.card img {
    outline: none;
    transition: 0.3s;
    cursor: pointer;
    transform-origin: 0 100%;
    height: 99px;
}

.card-active,
.card:hover {
    border-color: rgba(250, 236, 36, 0.986);
    scale: 1.1;
}

@media (min-width: 320px) {
    .card img {
        height: 52px;
    }
}

@media (min-width: 375px) {
    .card img {
        height: 70px;
    }
}

@media (min-width: 768px) {
    .card img {
        height: 85px;
    }
}

@media (min-width: 768px) {
    .card img {
        height: 99px;
    }
}

@media (min-width: 1440px) {
    .card {
        border: 3px solid #a58c42;
        padding: 3px;
    }
    .card img {
        height: 135px;
    }
}

@media (min-width: 1920px) {
    .card {
        border: 4px solid #a58c42;
        padding: 4px;
    }

    .card img {
        height: 190px;
    }
}

@media (min-width: 2560px) {
    .card {
        border: 7px solid #a58c42;
        padding: 7px;
    }

    .card img {
        height: 255px;
    }
}
</style>
