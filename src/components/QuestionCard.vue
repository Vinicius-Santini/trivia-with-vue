<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { shuffleArray } from '../helpers';

import QuestionCardTimer from '../components/QuestionCardTimer.vue'
import QuestionCardAnswer from '../components/QuestionCardAnswer.vue'
import QuestionCardScoreModal from './QuestionCardScoreModal.vue';
import AppLoading from './AppLoading.vue';

const store = useStore()

store.dispatch('loadRemoteQuestions')

const triviaCompleted = computed(() => store.state.triviaCompleted)
const currentQuestion = computed(() => store.getters.currentQuestion)

function handleAnswer(answer) {
    store.dispatch({ type: 'handleAnswer', answer: answer })
}

function createAnswerList(incorrectAnswers, correctAnswer) {
    const allAnswers = []
    allAnswers.push(...incorrectAnswers)
    allAnswers.push(correctAnswer)

    return shuffleArray(allAnswers)
}
</script>

<template>
    <div class="card-wrapper">
        <div v-if="currentQuestion" class="question-wrapper">
            <QuestionCardTimer />
            <div class="card-title">{{currentQuestion.question.text}}</div>
            <div class="options-wrapper">
                <QuestionCardAnswer
                    v-for="answer in createAnswerList(currentQuestion.incorrectAnswers, currentQuestion.correctAnswer)"
                    @send-answer="handleAnswer" :answer=answer />
            </div>
        </div>
        <div v-else>
            <AppLoading />
        </div>
        <QuestionCardScoreModal v-if="triviaCompleted" />
    </div>
</template>

<style>
.question-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 75%;
    max-width: 100%;
}
</style>