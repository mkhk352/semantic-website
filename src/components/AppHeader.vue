<template>
  <div class="ui center aligned raised segment">
    <div class="ui centered container">
        <sui-menu :width="4" :compact="true" >
          <sui-menu-item icon="home icon" :active="isActive('home')" v-on:click.native="setActive('home')"> <router-link :to="{name: 'main'}">Home</router-link></sui-menu-item>
          <sui-menu-item icon="lab icon" :active="isActive('services')"  v-on:click.native="setActive('services')"> <router-link :to="{name: 'services'}">Services</router-link> </sui-menu-item>
          <sui-menu-item icon="user icon":active="isActive('about')"  v-on:click.native="setActive('about')"> <router-link :to="{name: 'about'}">About</router-link> </sui-menu-item>
          <sui-menu-item icon="mail outline icon" :active="isActive('contact')"  v-on:click.native="setActive('contact')"> <router-link :to="{name: 'contact'}">Contact</router-link> </sui-menu-item>
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
      console.log(val);
      console.log(this.activeLink);
      console.log(this.activeLink === val);
      return this.activeLink === val;
    },
    setActive(val) {
      console.log(val);
      this.activeLink = val;
    },
  },
};
</script>
<style scoped>
  .container{
    margin: 1em;
  }
</style>


