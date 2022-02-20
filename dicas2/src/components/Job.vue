<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Job',
    provide(){
        return {
            getJobs: this.getJobs
        }
    },
    methods: {
        getJobs(){
            return {
                id: 1,
                title: 'Example',
                description: 'Example Injeção de Dependência'
            }
        }
    },
}
</script>