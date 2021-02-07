import Vue from 'vue';
import Router from 'vue-router';

import Menu from '@/components/template/Menu';
import Home from '@/components/Home';
// import User from '@/components/User/User';
// import UserList from '@/components/User/UserList';
// import UserEdit from '@/components/User/UserEdit';
// import UserDetail from '@/components/User/UserDetail';

Vue.use(Router);

const User = () => import(/* webpackChunkName: "user" */'@/components/User/User');
const UserList = () => import(/* webpackChunkName: "user" */'@/components/User/UserList');
const UserDetail = () => import('@/components/User/UserDetail');
const UserEdit = () => import('@/components/User/UserEdit');

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      components: {
        default: Home,
        menu: Menu,
      },
    },
    {
      path: '/user/',
      component: User,
      props: true,
      children: [
        { path: '', component: UserList },
        {
          path: ':id',
          component: UserDetail,
          props: true,
          // eslint-disable-next-line no-unused-vars
          beforeEnter: (to, from, next) => {
            // eslint-disable-next-line no-console
            console.log(
              'antes da rota -> usuario detalhe | na rota do componente'
            );
            next();
          },
        },
        {
          path: ':id/edit',
          component: UserEdit,
          props: true,
          name: 'editUser',
        },
      ],
    },
    {
      path: '/redirect',
      redirect: '/user',
    },
    {
      path: '/*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log('antes das rotas -> global');
  next();
});

export default router;
