import { Box, Typography } from '@mui/material';
import { useGetQuotes } from '../hooks/useGetQuotes';
import QuoteComponent from '../components/QuoteComponent';
import Loader from '../components/Loader';

export default function HomePage() {
  const { data, isLoading } = useGetQuotes();

  return (
    <>
      <Typography variant="h3" align="center" sx={{ mt: 10 }}>
        HomePage Component
      </Typography>
      <Box>{isLoading ? <Loader /> : <QuoteComponent data={data} />}</Box>
    </>
  );
}
