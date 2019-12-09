import Vue from 'vue'
import Router from 'vue-router'
import BlogMain from '@/page/BlogMain'
import BlogList from '@/page/BlogList'
import BlogInfo from '@/page/BlogInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogMain',
      component: BlogMain,
      redirect: 'BlogList',
      children: [
        {
          path: 'BlogList',
          name: 'BlogList',
          component: BlogList
        },
        {
          path: 'BlogInfo',
          name: 'BlogInfo',
          component: BlogInfo
        }
      ]
    }
  ]
})
