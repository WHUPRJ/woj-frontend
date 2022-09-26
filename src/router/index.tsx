import { createHashRouter } from 'react-router-dom';
import loadable from '@loadable/component';
const Index = loadable(() => import('../pages/index'));
const Login = loadable(() => import('../pages/login'));
const Register = loadable(() => import('../pages/register'));
const Page404 = loadable(() => import('../pages/page404'));
const Problem = loadable(() => import('../pages/problem'));
// const Profile = loadable(() => import('../pages/profile'));
import Profile from '../pages/profile';

const router = createHashRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/Problem',
    element: <Problem />,
  },
  {
    path: '/Profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export default router;
