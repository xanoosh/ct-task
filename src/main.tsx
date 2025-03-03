import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App.tsx';
import Loader from './components/Loader.tsx';

const HomePage = React.lazy(() => import('./pages/HomePage.tsx'));
const AdPanelPage = React.lazy(() => import('./pages/AdPanelPage.tsx'));
const NewAd = React.lazy(() => import('./pages/NewAd.tsx'));

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
        path: 'ad-panel',
        element: (
          <React.Suspense fallback={<Loader />}>
            <AdPanelPage />
          </React.Suspense>
        ),
        errorElement: <p>error</p>,
      },
      {
        path: 'new-ad',
        element: (
          <React.Suspense fallback={<Loader />}>
            <NewAd />
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
