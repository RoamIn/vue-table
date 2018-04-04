import Vue from 'vue'
import Router from 'vue-router'
import VueTable from '@/components/VueTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueTable',
      component: VueTable
    }
  ]
})
