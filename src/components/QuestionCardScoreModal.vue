<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()


const points = computed(() => store.state.points)
const numberOfQuestions = computed(() => store.getters.numberOfQuestions)

function reloadPage() {
    window.location.reload()
}
</script>

<template>
    <div class="background"></div>
    <div class="modal">
        <div class="modal-wrapper">
            your score was {{ `${points}/${numberOfQuestions}` }}
        </div>
        <button @click="reloadPage">Play again!</button>
    </div>
</template>

<style>
.background {
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.308);
    position: absolute;
    height: 110vh;
    width: 100%
}

.modal {
    z-index: 4;
    background-color: rgb(250, 247, 247);
    position: absolute;
    padding: 20px;
    border-radius: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 800px;
    max-width: 100%;
    max-height: 60%;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, .05), 5px 5px 8px rgba(0, 0, 0, .1);
    color: black;
}
</style>