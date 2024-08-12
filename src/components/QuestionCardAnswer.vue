<script setup>
const props = defineProps({
    answer: String
})

const emit = defineEmits(['send-answer'])
</script>

<template>
    <div @click="emit('send-answer', props.answer)" class="setting-option">{{ props.answer }}</div>
</template>

<style>
.setting-option {
    padding: 0 5px 0 5px;
    background-color: rgb(236, 241, 245);
    border-radius: 12px;
    cursor: pointer;
    min-width: 200px;
    width: fit-content;
    height: 50px;
    color: black;
    text-align: center;
    align-content: center;
    font-weight: bold;
    font-size: 24px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .05), 5px 5px 8px rgba(0, 0, 0, .1);

    @media (max-width: 1024px) {
        width: 80%;
        height: fit-content;
        min-height: 50px;
    }
}
</style>