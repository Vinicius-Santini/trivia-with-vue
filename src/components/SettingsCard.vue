<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { SET_CATEGORIES, SET_DIFFICULTIES, SET_LIMIT } from '../store/types';

import { numberOfQuestionsOptions, difficultyOptions, categoryOptions } from '../utils/SettingsOptions.js';

import SettingsCardOption from './SettingsCardOption.vue';
import SettingsCardButton from './SettingsCardButton.vue';

const store = useStore()

const isLimitSet = computed(() => store.getters.isLimitSet)
const isDifficultiesSet = computed(() => store.getters.isDifficultiesSet)
const isCategoriesSet = computed(() => store.getters.isCategoriesSet)

let selectedDifficulties = []
let selectedCategories = []

function setLimit(limit) {
    store.commit(SET_LIMIT, limit)
}

function selectDifficulty(difficulty) {
    selectedDifficulties.includes(difficulty) ? selectedDifficulties = selectedDifficulties.filter(diff => diff !== difficulty) : selectedDifficulties.push(difficulty)
}

function selectCategory(category) {
    selectedCategories.includes(category) ? selectedCategories = selectedCategories.filter(cat => cat !== category) : selectedCategories.push(category)
}

function setDifficulties() {
    if (selectedDifficulties.length > 0) {
        store.commit(SET_DIFFICULTIES, selectedDifficulties.toString())
    }
}

function setCategories() {
    if (selectedDifficulties.length > 0) {
        store.commit(SET_CATEGORIES, selectedCategories.toString())
    }
}
</script>

<template>
    <div class="card-wrapper">
        <div class="settings-title">Settings</div>
        <div v-if="!isLimitSet" class="card-content-wrapper">
            <div class="card-title">Select the number of questions</div>
            <div class="options-wrapper">
                <SettingsCardOption v-for="numberOfQuestionsOption in numberOfQuestionsOptions" @send-setting="setLimit"
                    :setting-option=numberOfQuestionsOption />
            </div>
        </div>
        <div v-else-if="isLimitSet && !isDifficultiesSet" class="card-content-wrapper">
            <div class="card-title">Select the difficulties of the questions</div>
            <div class="options-wrapper">
                <SettingsCardOption v-for="difficultyOption in difficultyOptions" @send-setting="selectDifficulty"
                    :setting-option=difficultyOption />
            </div>
            <div class="button-wrapper">
                <SettingsCardButton @confirm-setting="setDifficulties" />
            </div>
        </div>
        <div v-else-if="isLimitSet && isDifficultiesSet && !isCategoriesSet" class="card-content-wrapper">
            <div class="card-title">Select the categories you want</div>
            <div class="options-wrapper grid">
                <SettingsCardOption v-for="categoryOption in categoryOptions" @send-setting="selectCategory"
                    :setting-option=categoryOption />
            </div>
            <div class="button-wrapper">
                <SettingsCardButton @confirm-setting="setCategories" />
            </div>
        </div>
    </div>
</template>

<style>
.settings-title {
    font-size: 24px;
    font-weight: 700;
    text-shadow: 2px 1px 5px rgb(82, 39, 71);

    @media (max-width: 1024px) {
        font-size: 16px;
        margin-bottom: 20px;
    }
}

.options-wrapper.grid {
    width: fit-content !important;
    display: grid !important;
    grid-template-columns: repeat(2, 220px);
    gap: 36px;
    column-gap: 10%;

    @media (max-width: 1024px) {
        height: 100% !important;
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 220px);
        height: 100% !important;
    }
}

.button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
}
</style>