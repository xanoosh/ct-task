import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation, NavLink } from 'react-router';

interface NavBarInterface {
  navElements: { label: string; path: string }[];
}

export default function NavBar({ navElements }: NavBarInterface) {
  const { pathname } = useLocation();
  return (
    <Tabs value={pathname}>
      {navElements.map(({ label, path }, i) => (
        <Tab key={i} label={label} value={path} to={path} component={NavLink} />
      ))}
    </Tabs>
  );
}
