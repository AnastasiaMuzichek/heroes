<script setup lang="ts">
const sides = ['lt', 'rt', 'lb', 'rb'];
</script>

<template>
    <div class="retro-box">
        <div class="retro-box-content">
            <slot></slot>
            <img
                v-for="side in sides"
                :class="[
                    'retro-box-content-ornament',
                    'retro-box-content-ornament-' + side,
                ]"
                :key="side"
                src="../../assets/images/ui/agemll.png"
            />
        </div>
    </div>
</template>

<style scoped>
.retro-box {
    align-self: flex-start;
    background-color: #000;
    border: 2px solid #a58c42;
    box-sizing: border-box;
    display: inline-flex;
    padding: 2px;
}
.retro-box-content {
    background-image: url('../../assets/images/ui/backdrop.webp');
    border: 2px solid #a58c42;
    padding: 16px;
    position: relative;
    width: inherit;
}
.retro-box-content-ornament {
    height: 32px;
    position: absolute;
    z-index: 10;
}
.retro-box-content-ornament-lb {
    bottom: -1px;
    left: -1px;
}
.retro-box-content-ornament-lt {
    left: -1px;
    top: -1px;
    transform: rotate(90deg);
}
.retro-box-content-ornament-rb {
    bottom: -1px;
    right: -1px;
    transform: rotate(-90deg);
}
.retro-box-content-ornament-rt {
    right: -1px;
    top: -1px;
    transform: rotate(180deg);
}

@media (min-width: 320px) {
    .retro-box-content {
        padding: 14px;
    }
}

@media (min-width: 768px) {
    .retro-box-content {
        padding: 16px;
    }
}

@media (min-width: 1440px) {
    .retro-box {
        border-width: 3px;
        padding: 3px;
    }
    .retro-box-content {
        border-width: 3px;
    }
    .retro-box-content-ornament {
        height: 42px;
    }
}

@media (min-width: 1920px) {
    .retro-box {
        border-width: 4px;
        padding: 4px;
    }
    .retro-box-content {
        border-width: 4px;
    }
    .retro-box-content-ornament {
        height: 52px;
    }
    .retro-box-content {
        padding: 20px;
    }
}

@media (min-width: 2560px) {
    .retro-box-content-ornament {
        height: 58px;
    }
    .retro-box-content {
        padding: 35px;
    }
}
</style>
