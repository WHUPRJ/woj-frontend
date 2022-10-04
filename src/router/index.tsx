import { createHashRouter } from 'react-router-dom';
import loadable from '@loadable/component';
const Index = loadable(() => import('../pages/index'));
const Login = loadable(() => import('../pages/login'));
const Register = loadable(() => import('../pages/register'));
const Page404 = loadable(() => import('../pages/page404'));
const Problem = loadable(() => import('../pages/problem'));
const Problemlist = loadable(() => import('../pages/problemlist'));
const Profile = loadable(() => import('../pages/profile'));
const NewProblem = loadable(() => import('../pages/newproblem'));
const Admin = loadable(() => import('../pages/admin'));
const Search = loadable(() => import('../pages/search'));
const Record = loadable(() => import('../pages/record'));
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
    path: '/Problemlist',
    element: <Problemlist />,
  },
  {
    path: '/Profile/',
    element: <Profile />,
  },
  {
    path: '/Profile/:uid',
    element: <Profile />,
  },
  {
    path: '/NewProblem',
    element: <NewProblem />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/search/:keyword',
    element: <Search />,
  },
  {
    path: '/record',
    element: <Record />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export default router;
