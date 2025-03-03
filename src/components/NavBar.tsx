import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation, NavLink } from 'react-router';

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <Tabs value={pathname}>
      <Tab label="Home" value="/" to="/" component={NavLink} />
      <Tab
        label="Add Panel"
        value="/add-panel"
        to="/add-panel"
        component={NavLink}
      />
    </Tabs>
  );
}
