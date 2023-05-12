import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PhoneBookAppBar from 'components/phoneBookAppBar/PhoneBookAppBar';
import { Container } from '@mui/material';
import { Loader } from 'components/phoneBook';

const SharedLayout = () => {
  return (
    <>
      <PhoneBookAppBar />
      <Container maxWidth="sm">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
