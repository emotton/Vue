<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
            avatar: 'highlander.jpeg',
            descricao: 'Highlander'
        }
    }
}
</script>