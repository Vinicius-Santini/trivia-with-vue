<script setup>
const props = defineProps({
    settingOption: String
})

const emit = defineEmits(['send-setting'])
</script>

<template>
    <div @click="emit('send-setting', props.settingOption)" class="setting-option">{{ settingOption }}</div>
</template>

<style>
.setting-option {
    background-color: aliceblue;
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

    @media (max-width: 1024px) {
        width: 80%
    }
}
</style>