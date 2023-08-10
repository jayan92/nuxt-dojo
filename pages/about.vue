<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum quos omnis nam vel velit ea dolorem reiciendis blanditiis dolores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum quos omnis nam vel velit ea dolorem reiciendis blanditiis dolores.</p>
    </div>
    <p>api response:</p>
    <div>{{ data }}</div>
</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=mario')
// const { data } = await useFetch('/api/ninja?name=mario', {
//   method: 'post',
//   body: {age: 30}
// })

const { data } = await useFetch('/api/ninja')

// const { data } = await useFetch('/api/currency/EUR')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
