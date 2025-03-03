import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './components/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
          <React.Suspense fallback={<p>loader</p>}>
            <HomePage />
          </React.Suspense>
        ),
        errorElement: <p>error</p>,
      },
      {
        path: 'add-panel',
        element: (
          <React.Suspense fallback={<p>loader</p>}>
            <AddPanelPage />
          </React.Suspense>
        ),
        errorElement: <p>error</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
