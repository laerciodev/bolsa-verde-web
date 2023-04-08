import { createBrowserRouter } from 'react-router-dom';
import Login from '@pages/login';
import SignUp from '@pages/signup';
import Dashboard from '@pages/dashboard';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);
