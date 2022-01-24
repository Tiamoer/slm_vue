import { createRouter, createWebHashHistory } from 'vue-router';
import axios from "axios";
import { ElNotification } from "element-plus"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*
* 挂载路由导航守卫
* 以后可以加入权限校验，由后台校验token正确性！
*/
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') return next();
  // 获取token
  const token = window.localStorage.getItem('slmToken');
  let code;
  await axios.get('/isLogin').then((response) => {
    code = response.data.code;
  })
  if ( !token || code !== 200) {
    ElNotification({
      title: '提醒',
      type: 'error',
      message: '请先登录！',
    });
    return next('/login');
  }
  next();
})

export default router