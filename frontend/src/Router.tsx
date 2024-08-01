import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <Login />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
