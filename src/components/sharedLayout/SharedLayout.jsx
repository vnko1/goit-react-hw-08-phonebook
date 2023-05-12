import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PhoneBookAppBar from 'components/phoneBookAppBar/PhoneBookAppBar';
import { Container } from '@mui/material';
import SimpleBackdrop from 'components/phoneBook/loader/SimpleBackdropLoader';
const SharedLayout = () => {
  return (
    <>
      <PhoneBookAppBar />
      <Container maxWidth="sm">
        <Suspense fallback={<SimpleBackdrop isLoading={true} />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
