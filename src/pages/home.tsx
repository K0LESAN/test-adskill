import { Stack } from '@mui/material';
import { Metrics } from '@/components/metrics';
import { Offers } from '@/components/offers';

export const Home = () => {
  return (
    <Stack
      width={'100vw'}
      height={'100vh'}
      alignItems={'center'}
      mt={6}
      gap={6}
    >
      <Metrics />
      <Offers />
    </Stack>
  );
};
