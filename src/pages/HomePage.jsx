import { useUser } from 'services';

const HomePage = () => {
  const {
    isLoggedIn,
    user: { name },
  } = useUser();

  return (
    <>
      <h1
        style={{ marginTop: 100, marginBottom: 20, textTransform: 'uppercase' }}
      >
        WELCOME{isLoggedIn ? `, ${name}` : ''}!
      </h1>
      {!isLoggedIn && (
        <p style={{ textAlign: 'center' }}>Please sign in to continue </p>
      )}
    </>
  );
};

export default HomePage;
