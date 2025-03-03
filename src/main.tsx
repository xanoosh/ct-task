import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App.tsx';
import Loader from './components/Loader.tsx';

const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));
const AddPanelPage = React.lazy(() => import('./pages/AddPanelPage.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loader />}>
            <HomePage />
          </React.Suspense>
        ),
        errorElement: <p>error</p>,
      },
      {
        path: 'add-panel',
        element: (
          <React.Suspense fallback={<Loader />}>
            <AddPanelPage />
          </React.Suspense>
        ),
        errorElement: <p>error</p>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
