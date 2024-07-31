import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
