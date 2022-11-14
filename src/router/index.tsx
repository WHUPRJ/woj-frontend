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
const Record = loadable(() => import('../pages/record'));
const Submit = loadable(() => import('../pages/submit'));
const Submission = loadable(() => import('../pages/submission'));
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
    path: '/Problem/:pid',
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
    path: '/NewProblem/:pid',
    element: <NewProblem />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/Problemlist/:keyword',
    element: <Problemlist />,
  },
  {
    path: '/record',
    element: <Record />,
  },
  {
    path: '/submit/:pid',
    element: <Submit />,
  },
  {
    path: '/submission/:sid',
    element: <Submission />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export default router;
