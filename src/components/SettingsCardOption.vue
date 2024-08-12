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
    <div @click="emit('send-setting', props.settingOption); toggleSelected()" class="setting-option"
        :class="{selected: isSelected}">{{
        settingOption }}</div>
</template>

<style>
.setting-option {
    background-color: rgb(236, 241, 245);
    border-radius: 12px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    color: black;
    text-align: center;
    align-content: center;
    font-weight: bold;
    font-size: 24px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .05), 5px 5px 8px rgba(0, 0, 0, .1);

    @media (max-width: 767px) {
        font-size: 20px;

    }

    @media (max-width: 1024px) {
        width: 80%
    }
}

.selected {
    background-color: aqua !important;
}
</style>