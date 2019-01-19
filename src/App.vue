<template>
  <div>
    <md-toolbar class="md-primary">
        <h1 class="md-title">Vue Material</h1>
    </md-toolbar>
    
    <md-content>
        <HeaderBar msg="Welcome to Your Vue.js App"/>
    </md-content>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar.vue'

  export default {
    name: 'App',
    components: {
      HeaderBar
    }
  }
</script>

<style lang="scss">
.md-content {
  padding: 16px;
}
</style>