import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Team from '../views/Team.vue';
import Rule from '../views/Rule.vue';
import Table from '../views/Table.vue';
import Scrim from '../views/Scrim.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/team',
    name: "Team",
    component: Team,
  },
  {
    path: '/rule',
    name: "Rule",
    component: Rule,
  },
  {
    path: '/scrim',
    name: "Scrim",
    component: Scrim,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
