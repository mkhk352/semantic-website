<template>
  <div class="">
    <app-header></app-header>
    <div class="ui center aligned raised segment" id="content">
      <sui-image src="/assests/landscape.jpeg" size="large" />
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
