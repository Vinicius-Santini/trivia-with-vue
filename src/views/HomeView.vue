<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

import SettingsCard from '../components/SettingsCard.vue'
import QuestionCard from '../components/QuestionCard.vue'


const store = useStore()

const isLimitSet = computed(() => store.getters.isLimitSet)
const isDifficultiesSet = computed(() => store.getters.isDifficultiesSet)
const isCategoriesSet = computed(() => store.getters.isCategoriesSet)

</script>

<template>
    <div class="home-wrapper">
        <component :is="isLimitSet && isDifficultiesSet && isCategoriesSet ? QuestionCard : SettingsCard" />
    </div>
</template>

<style></style>