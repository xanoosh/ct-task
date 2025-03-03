import NavBar from './NavBar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <CssBaseline />
      <NavBar />
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
