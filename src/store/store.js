import Vuex from 'vuex';
import { getRandomQuestions } from '../utils/ApiService'
import { SET_QUESTIONS, SET_NUMBER_OF_QUESTIONS, SET_DIFFICULTIES, SET_CATEGORIES } from './types';


export const store = new Vuex.Store({
    state: {
        questions: [],
        settings: {
            numberOfQuestions: '',
            difficulties: '',
            categories: ''
        }
    },
    mutations: {
        [SET_QUESTIONS](state, payload) {
            state.questions.push(payload)
        },
        [SET_NUMBER_OF_QUESTIONS](state, payload) {
            state.settings.numberOfQuestions = payload
        },
        [SET_DIFFICULTIES](state, payload) {
            state.settings.difficulties = payload
        },
        [SET_CATEGORIES](state, payload) {
            state.settings.categories = payload
        }
    },
    actions: {
        async loadRemoteQuestions(settings = state.settings) {
            const questions = await getRandomQuestions(settings)
            store.commit(SET_QUESTIONS, questions)
        },
    },
    getters: {
        isNumberOfQuestionsSet(state = state) {
            return state.settings.numberOfQuestions !== ''
        },
        isDifficultiesSet(state = state) {
            return state.settings.difficulties !== ''
        },
        isCategoriesSet(state = state) {
            return state.settings.categories !== ''
        }
    },
});


export default store;