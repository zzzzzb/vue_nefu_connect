import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import user from '@/components/user/user'
import msgList from '@/components/msg-list/msg-list'
import details from '@/components/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'msg-list',
          name: 'msgList',
          component: msgList
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/details/:msg_id',
      name: 'details',
      component: details,
    }
  ],
  go: {}

})

