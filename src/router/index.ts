import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

//
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePg',
    component: () => import('../views/HomePg.vue'),
  },
  {
    path: '/roadmap',
    name: 'RoadMapPg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/RoadMapPg.vue'),
  },
  {
    path: '/detail/:id',
    name: 'DetailPg',
    component: () => import('../views/DetailPg.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
