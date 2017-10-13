import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import t2 from '@/components/t2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/t2',
      name: 't2',
      component: t2
    }
  ]
})
