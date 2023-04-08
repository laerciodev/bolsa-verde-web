import ReactDOM from 'react-dom/client'
import '@/styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/config/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
