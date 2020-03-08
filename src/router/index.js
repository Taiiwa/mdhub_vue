import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import item from '@/components/item'
import detail from '@/components/detail'
import mytest from '@/components/mytest'
import test from '@/components/test'
import simple_cart from '@/components/simple_cart'
import register from '@/components/register'

Vue.use(Router)

var routes = [
        {
          path:'/register',
          name:'register',
          component:register
        },
        {
          path:'/simple_cart',
          name:'simple_cart',
          component:simple_cart
        },
        {
          path:'/test',
          name:'test',
          component:test
        },
        {
          path:'/cart',
          name:'cart',
          component:cart
        },
        {
          path:'/item',
          name:'item',
          component:item
        },
        {
          path:'/detail',
          name:'detail',
          component:detail
        },
        {
          path:'/mytest',
          name:'mytest',
          component:mytest
        },
        {
          path:'/',
          name:'index',
          component:index
        },
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
