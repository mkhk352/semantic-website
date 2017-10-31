import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: 'services',
      name: 'services',
      component: Services,
    },
    {
      path: 'about',
      name: 'about',
      component: About,
    },
    {
      path: 'contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
