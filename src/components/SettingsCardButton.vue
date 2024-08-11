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

}
</style>