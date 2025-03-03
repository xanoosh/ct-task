import { useQuery } from '@tanstack/react-query';

const getQuotesQuery = () => ({
  queryKey: ['quotes'],
  queryFn: () => getQuotes(),
  staleTime: 1000 * 60 * 5,
});

async function getQuotes() {
  try {
    const response = await fetch(`https://thequoteshub.com/api/`, {
      method: 'GET',
    });
    if (response.status !== 200) {
      throw new Error('Failed to fetch quotes');
    }
    const Quote = await response.json();
    return Quote;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export function useGetQuotes() {
  return useQuery(getQuotesQuery());
}
