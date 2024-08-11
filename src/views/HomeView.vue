<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

import SettingsCard from '../components/SettingsCard.vue'
import QuestionCard from '../components/QuestionCard.vue'


const store = useStore()

let isNumberOfQuestionsSet = computed(() => store.getters.isNumberOfQuestionsSet)
let isDifficultiesSet = computed(() => store.getters.isDifficultiesSet)
let isCategoriesSet = computed(() => store.getters.isCategoriesSet)
</script>

<template>
    <div class="home-wrapper">
        <QuestionCard v-if="isNumberOfQuestionsSet && isDifficultiesSet && isCategoriesSet" />
        <SettingsCard v-else />
    </div>
</template>

<style>
.home-wrapper {
    height: 100%;
}
</style>