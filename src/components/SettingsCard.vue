<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import SettingsCardOption from './SettingsCardOption.vue';
import { SET_CATEGORIES, SET_DIFFICULTIES, SET_NUMBER_OF_QUESTIONS } from '../store/types';

const store = useStore()
let difficulties = []
let categories = []
const numberOfQuestionsOptions = [
    '5',
    '10',
    '15'
]
const difficultyOptions = [
    'easy',
    'medium',
    'hard'
]
const categoryOptions = [
    'easy',
    'medium',
    'hard'
]
let isNumberOfQuestionsSet = computed(() => store.getters.isNumberOfQuestionsSet)
let isDifficultiesSet = computed(() => store.getters.isDifficultiesSet)
let isCategoriesSet = computed(() => store.getters.isCategoriesSet)

function setNumberOfQuestions(numberOfQuestions) {
    store.commit(SET_NUMBER_OF_QUESTIONS, numberOfQuestions)
}

function selectDifficulty(difficulty) {
    difficulties.includes(difficulty) ? difficulties = difficulties.filter(diff => diff !== difficulty) : difficulties.push(difficulty)
    console.log(difficulties)
}

function selectCategories(category) {
    difficulties.includes(category) ? categories = categories.filter(cat => cat !== category) : difficulties.push(category)
}

function setDifficulties(difficulties) {
    store.commit(SET_DIFFICULTIES, difficulties)
}

function setCategories(categories) {
    store.commit(SET_CATEGORIES, categories)
}
</script>

<template>
    <div class="card-wrapper">
        <div class="card-title">Settings</div>
        <div v-if="!isNumberOfQuestionsSet">
            <div class="setting-title">Select the number of questions</div>
            <div class="options-wrapper">
                <SettingsCardOption v-for="numberOfQuestionsOption in numberOfQuestionsOptions"
                    @send-setting="setNumberOfQuestions" :setting-option=numberOfQuestionsOption />
            </div>
        </div>
        <div v-else-if="isNumberOfQuestionsSet && !isDifficultiesSet">
            <div class="setting-title">Select difficulty</div>
            <div class="options-wrapper">
                <SettingsCardOption v-for="difficultyOption in difficultyOptions" @send-setting="selectDifficulty"
                    :setting-option=difficultyOption />
            </div>
        </div>
        <div v-else-if="isNumberOfQuestionsSet && isDifficultiesSet && !isCategoriesSet">
            <div class="setting-title">Select the categories you want</div>
            <div class="options-wrapper">
                <SettingsCardOption v-for="categoryOption in categoryOptions" @send-setting="selectCategory"
                    :setting-option=categoryOption />
            </div>
        </div>
    </div>
</template>

<style>
.card-wrapper {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-title {
        font-size: 24px;
        font-weight: 700;
        text-shadow: 2px 1px 5px rgb(82, 39, 71);
    }

    .setting-title {
        font-size: 48px;
        font-weight: 700;
        text-shadow: 2px 1px 5px rgb(82, 39, 71);
        text-align: center;
    }

    .options-wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 36px;
        gap: 48px;

        @media (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            margin-top: 48px;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 100vh;
    }
}
</style>