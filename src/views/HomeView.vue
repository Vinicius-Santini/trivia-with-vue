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

<style>
.home-wrapper {
    height: 100%;
}

.card-wrapper {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-content-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 1024px) {
            height: 100%;
        }
    }

    .card-title {
        font-size: 48px;
        font-weight: 700;
        text-shadow: 2px 1px 5px rgb(82, 39, 71);
        text-align: center;
        text-wrap: pretty;

        @media (max-width: 1024px) {
            font-size: 28px;
            line-height: 40px;
            width: 75%;
        }
    }

    .options-wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 36px;
        width: 100%;

        @media (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            min-height: fit-content;
            height: 300px;
        }

        .option {
            background-color: rgb(236, 241, 245);
            padding: 2px 10px 2px 10px;
            border-radius: 12px;
            cursor: pointer;
            min-width: 200px;
            width: fit-content;
            height: fit-content;
            min-height: 50px;
            color: rgb(15, 15, 15);
            text-align: center;
            align-content: center;
            font-weight: bold;
            font-size: 24px;
            box-shadow: 0 0 5px rgba(0, 0, 0, .05), 5px 5px 8px rgba(0, 0, 0, .1);

            @media (max-width: 767px) {
                font-size: 20px;

            }

            @media (max-width: 1024px) {
                width: 80%;
                height: fit-content;
                min-height: 40px;

            }
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 767px) {
        height: 100%;
    }
}
</style>