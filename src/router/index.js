import React from 'react';

const index = React.lazy(() => import('../pages/index'));
const login = React.lazy(() => import('../pages/login'));
const register = React.lazy(() => import('../pages/register'));
const page404 = React.lazy(() => import('../pages/page404'));
const routes = [
  { path: '/', exact: true, component: index },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { component: page404 },
];
export default routes;
