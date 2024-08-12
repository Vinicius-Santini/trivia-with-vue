<template>
    <div class="load"></div>
</template>

<style>
.load {
    margin: 100px auto 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid transparent;
    border-top-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>