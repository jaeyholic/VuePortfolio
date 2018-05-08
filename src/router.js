import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import One from './views/PorfolioOne.vue'
import Two from './views/PorfolioTwo.vue'
import Three from './views/PorfolioThree.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio/one',
      name: 'one',
      component: One
    },
    {
      path: '/portfolio/two',
      name: 'two',
      component: Two
    },
    {
      path: '/portfolio/three',
      name: 'three',
      component: Three
    }
  ]
})
