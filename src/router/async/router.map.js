// 视图组件
const view = {
  tabs: () => import('@/layout/tabs'),
  blank: () => import('@/layout/BlankView'),
  page: () => import('@/layout/PageView')
}

// 路由组件注册
const routerMap = {
  login: {
    authority: '*',
    path: '/login',
    component: () => import('@/views/login')
  },
  root: {
    path: '/',
    name: '首页',
    redirect: '/login',
    component: view.tabs
  },
  dashboard: {
    name: 'Dashboard',
    component: view.blank
  },
  workplace: {
    name: '工作台',
    component: () => import('@/views/dashboard/workplace')
  },
  analysis: {
    name: '分析页',
    component: () => import('@/views/dashboard/analysis')
  },
  success: {
    name: '成功',
    component: () => import('@/views/result/Success')
  },
  error: {
    name: '失败',
    component: () => import('@/views/result/Error')
  }
}
export default routerMap

