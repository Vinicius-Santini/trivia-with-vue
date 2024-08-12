<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { INCREMENT_CURRENT_QUESTION_INDEX, INCREMENT_POINTS } from '../store/types';

import QuestionCardTimer from '../components/QuestionCardTimer.vue'
import QuestionCardAnswer from '../components/QuestionCardAnswer.vue'
import QuestionCardScoreModal from './QuestionCardScoreModal.vue';

const store = useStore()

store.dispatch('loadRemoteQuestions')

const triviaCompleted = computed(() => store.state.triviaCompleted)
// const questionList = computed(() => store.state.questions)
// const currentQuestionIndex = computed(() => store.state.currentQuestionIndex)
const currentQuestion = computed(() => store.getters.currentQuestion)

// function timer() {
//     setTimeout(() => {
//         if (currentQuestionIndex < questionList.length - 1) {
//             store.commit(INCREMENT_CURRENT_QUESTION_INDEX)
//         }
//     }, "8000");
// }

function handleAnswer(answer) {
    store.dispatch({ type: 'handleAnswer', answer: answer })
}

function createAnswerList(incorrectAnswers, correctAnswer) {
    const allAnswers = []
    allAnswers.push(...incorrectAnswers)
    allAnswers.push(correctAnswer)
    for (let i = allAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers
}

// timer()
</script>

<template>
    <div class="card-wrapper">
        <div v-if="currentQuestion" class="question-wrapper">
            <QuestionCardTimer />
            <div class="setting-title">{{currentQuestion.question.text}}</div>
            <div class="options-wrapper">
                <QuestionCardAnswer
                    v-for="answer in createAnswerList(currentQuestion.incorrectAnswers, currentQuestion.correctAnswer)"
                    @send-answer="handleAnswer" :answer=answer />
            </div>
        </div>
        <div v-else>Loading...</div>
        <QuestionCardScoreModal v-if="triviaCompleted" />
    </div>
</template>

<style>
.question-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>