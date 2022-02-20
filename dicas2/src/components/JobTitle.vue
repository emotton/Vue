<template>
    <div>
        JobTitle
    </div>
</template>

<script>
export default {
    name: 'JobTitle',
    inject: ['getJobs'],
    created() {
        // console.log(this.$parent.$parent.getJobs());
        console.log(this.getJobs());
    },
}
</script>