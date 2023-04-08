import { createBrowserRouter } from 'react-router-dom';
import Login from '@pages/login';
import SignUp from '@pages/signup';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
]);
