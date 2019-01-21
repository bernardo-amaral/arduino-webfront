<template>
  <md-toolbar class="md-primary">
    <h1 class="md-title">{{ title }}</h1>
  </md-toolbar>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
