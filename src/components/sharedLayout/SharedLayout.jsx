import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'components/responsiveAppBar/ResponsiveAppBar';
import { Container } from '@mui/material';
import { Loader } from 'components/phoneBook';

const SharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
