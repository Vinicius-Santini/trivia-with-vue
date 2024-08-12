import Vuex from 'vuex';
import { getRandomQuestions } from '../utils/ApiService'
import { SET_QUESTIONS, SET_LIMIT, SET_DIFFICULTIES, SET_CATEGORIES, INCREMENT_CURRENT_QUESTION_INDEX, INCREMENT_POINTS, UPDATE_TRIVIA_COMPLETION } from './types';


export const store = new Vuex.Store({
    state: {
        questions: [],
        currentQuestionIndex: 0,
        points: 0,
        triviaCompleted: false,
        settings: {
            limit: '',
            difficulties: '',
            categories: ''
        }
    },
    mutations: {
        [SET_QUESTIONS](state, payload) {
            state.questions.push(...payload)
        },
        [SET_LIMIT](state, payload) {
            state.settings.limit = payload
        },
        [SET_DIFFICULTIES](state, payload) {
            state.settings.difficulties = payload
        },
        [SET_CATEGORIES](state, payload) {
            state.settings.categories = payload
        },
        [INCREMENT_CURRENT_QUESTION_INDEX](state) {
            state.currentQuestionIndex++
        },
        [INCREMENT_POINTS](state) {
            state.points++
        },
        [UPDATE_TRIVIA_COMPLETION](state) {
            state.triviaCompleted = true
        },
    },
    actions: {
        async loadRemoteQuestions({ commit, state }) {
            const questions = await getRandomQuestions(state.settings)
            commit(SET_QUESTIONS, questions)
        },
        handleAnswer({ commit, state }, answer) {
            if (state.questions[state.currentQuestionIndex].correctAnswer === answer.answer) {
                commit(INCREMENT_POINTS)
            }
            if (state.currentQuestionIndex < state.questions.length - 1) {
                commit(INCREMENT_CURRENT_QUESTION_INDEX)
            } else {
                commit(UPDATE_TRIVIA_COMPLETION)
            }
        }
    },
    getters: {
        isLimitSet(state) {
            return state.settings.limit !== ''
        },
        isDifficultiesSet(state) {
            return state.settings.difficulties !== ''
        },
        isCategoriesSet(state) {
            return state.settings.categories !== ''
        },
        currentQuestion(state) {
            return state.questions[state.currentQuestionIndex]
        },
        numberOfQuestions(state) {
            return state.questions.length
        }
    },
});


export default store;