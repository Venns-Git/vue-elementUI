import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/Button'
import ButtonDetail from '../components/ButtonDetail'
import Link from '../components/link'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },{
      path: '/buttonDetail',
      component: ButtonDetail
    },
    {
      path: '/link',
      component: Link
    }
  ]
})
