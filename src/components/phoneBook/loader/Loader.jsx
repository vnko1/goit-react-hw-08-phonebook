import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    }}
  >
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="grey"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </div>
);
