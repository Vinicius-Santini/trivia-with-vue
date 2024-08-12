<script setup>
const emit = defineEmits(['confirm-setting'])
</script>

<template>
    <button class="button" @click="emit('confirm-setting')" type="button">Confirm</button>
</template>

<style>
.button {
    width: 200px;
    height: 40px;
    background-color: rgba(60, 87, 87, 0.466);
    border-radius: 8px;
    border: none !important;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0 0 5px rgba(0, 0, 0, .05), 5px 5px 8px rgba(0, 0, 0, .1);
}
</style>