<script setup>
import { ref } from 'vue';

const props = defineProps({
    settingOption: String
})

let isSelected = ref(false)

function toggleSelected() {
    isSelected.value = !isSelected.value;
}

const emit = defineEmits(['send-setting'])
</script>

<template>
    <div @click="emit('send-setting', props.settingOption); toggleSelected()" class="option"
        :class="{selected: isSelected}">{{
        settingOption.replaceAll('_', ' ') }}</div>
</template>

<style>
.selected {
    background: linear-gradient(30deg, #2aa, #92d8d8);
    color: white !important;
    transform: scale(1.1);
}
</style>