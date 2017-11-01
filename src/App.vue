<template>
  <div class="">
    <app-header></app-header>
      <sui-image :src="img"  />
      <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import img from './assets/landscape.jpeg';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },

  data() {
    return {
      img: img,
    };
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
