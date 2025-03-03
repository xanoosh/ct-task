import NavBar from './NavBar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

function App() {
  const navElements = [
    { label: 'Home', path: '/' },
    { label: 'Ad Panel', path: '/ad-panel' },
    { label: 'New Ad', path: '/new-ad' },
  ];
  return (
    <main>
      <CssBaseline />
      <NavBar navElements={navElements} />
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
