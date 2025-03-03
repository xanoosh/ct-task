import { Typography, Box } from '@mui/material';
import { useAdStore } from '../hooks/useAdStore';

export default function AddPanelPage() {
  const { ads } = useAdStore((state) => state.store);
  return (
    <>
      <Typography variant="h3" align="center" sx={{ mt: 10 }}>
        Advertisment Panel
      </Typography>
      <Box>
        {ads.map(({ id, title, text }) => (
          <Typography key={id} variant="h6">
            {title}
            {text}
          </Typography>
        ))}
      </Box>
    </>
  );
}
