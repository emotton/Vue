<template>
    <div>
        <h1>Componente</h1>
        <h2>{{valor1}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        valor1: {
            type: [String, Array],
            default: 'sem nome'
        }
    }
}
</script>