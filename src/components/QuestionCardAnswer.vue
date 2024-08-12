<script setup>
const props = defineProps({
    answer: String
})

const emit = defineEmits(['send-answer'])
</script>

<template>
    <div @click="emit('send-answer', props.answer)" class="option">{{ props.answer }}</div>
</template>