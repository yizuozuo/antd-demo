import TabsView from '@/layout/tabs/TabsView'
import BlankView from '@/layout/BlankView'
import PageView from '@/layout/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/views/login')
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'workplace',
              name: '工作台',
              meta: {
                page: {
                  closable: false
                }
              },
              component: () => import('@/views/dashboard/workplace'),
            },
            {
              path: 'analysis',
              name: '分析页',
              component: () => import('@/views/dashboard/analysis'),
            }
          ]
        }
      ]
    },
  ]
}

export default options
