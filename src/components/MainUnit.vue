<script setup lang="ts">

defineProps({
    fullImage: String,
});
</script>

<template>
    <div class="main-unit">
        <img :src="fullImage" ></img>
    </div>
</template>

<style scoped>
.main-unit {
    background-position: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 40%;
} 

img {
    align-self: flex-start;
    background-color: #000;
    border: 2px solid #a58c42;
    box-sizing: border-box;
    display: inline-flex;
    padding: 2px;
    /* width: 120%; */
    height: 92%;
}

img:active {
    scale: 1.02;
    z-index: 15;
    transform: translateY(5px);
}

@media (min-width: 1440px) {
    img {
        border-width: 4px;
    }
}

@media (min-width: 2560px) {
    img {
        border-width: 7px;
    }
}

@media (max-width: 1023px) {
    .main-unit {
        padding-right: 5px;
        width: auto;
    }

    img {
        height: auto;
        width: 100%;
    }
}
</style>
