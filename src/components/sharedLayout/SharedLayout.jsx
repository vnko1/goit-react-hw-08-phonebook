import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'components/responsiveAppBar/ResponsiveAppBar';
import { Container } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Suspense fallback={'loading'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
