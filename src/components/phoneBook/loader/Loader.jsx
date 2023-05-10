import { ThreeDots } from 'react-loader-spinner';
import css from './Loaders.module.css';

export const Loader = () => (
  <div className={css.loader}>
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
