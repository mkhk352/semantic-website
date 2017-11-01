<template>
  <div class="ui center aligned raised segment no-margin">
    <div class="ui centered container">
        <sui-menu :width="4" :compact="true" >
          <sui-menu-item icon="home icon" :active="isActive('home')"> <router-link :to="{name: 'main'}"  v-on:click.native="setActive('home')">Home</router-link></sui-menu-item>
          <sui-menu-item icon="lab icon" :active="isActive('services')"> <router-link :to="{name: 'services'}"   v-on:click.native="setActive('services')">Services</router-link> </sui-menu-item>
          <sui-menu-item icon="user icon":active="isActive('about')"> <router-link :to="{name: 'about'}"   v-on:click.native="setActive('about')">About</router-link> </sui-menu-item>
          <sui-menu-item icon="mail outline icon" :active="isActive('contact')"> <router-link :to="{name: 'contact'}"   v-on:click.native="setActive('contact')">Contact</router-link> </sui-menu-item>
        </sui-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLink: 'home',
    };
  },
  methods: {
    isActive(val) {
      return this.activeLink === val;
    },
    setActive(val) {
      this.activeLink = val;
    },
  },
};
</script>
<style scoped>
  .no-margin{
    margin: 1em .5em 0em 0em;
    padding: 1em .5em 0em 0em;
  }
</style>


