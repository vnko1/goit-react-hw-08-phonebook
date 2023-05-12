import { ThreeDots } from 'react-loader-spinner';
const FetchingLoader = () => {
  return (
    <ThreeDots
      height="30"
      width="30"
      radius="9"
      color="grey"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};

export default FetchingLoader;
