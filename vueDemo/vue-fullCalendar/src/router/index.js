import Vue from 'vue'
import Router from 'vue-router'
import fullCalendar from '@/components/fullCalendar'
import slot from '@/components/slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fullCalendar',
      component: fullCalendar
    },
    {
      path: '/slot',
      name: 'slot',
      component: slot
    }
  ]
})
