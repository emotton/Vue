<template>
  <div id="app">
    <Job>
      <job-header>
        <job-title />
      </job-header>
    </Job>
  </div>
</template>

<script>
import Job from "./components/Job.vue";
import JobTitle from "./components/JobTitle.vue";
import JobHeader from "./components/JobHeader.vue";

export default {
  name: "App",
  components: {
    Job,
    JobTitle,
    JobHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
