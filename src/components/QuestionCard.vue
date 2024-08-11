<script setup>
import { useStore } from 'vuex'

// import QuestionCardTimer from '../components/QuestionCardTimer.vue'
// import QuestionCardAnswers from '../components/QuestionCardTimer.vue'
// const store = useStore()

// const loadRemoteQuestions: (() => store.dispatch('loadRemoteQuestions'))
</script>

<template>
    <div>
    </div>
</template>

<script>
export default {
    setup() {
        const store = useStore()

        return {
            loadRemoteQuestions: (() => store.dispatch('loadRemoteQuestions')),
        }
    },
}

// onMounted(() => setup().then(() => this.loadRemoteQuestions()))
</script>