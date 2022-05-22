import { Watch } from 'react-loader-spinner';
import s from './Loading.module.css';

function Loading() {
  return (
    <div className={s.wrapper}>
      <Watch height="100" width="100" color="#0064EB" ariaLabel="loading" />
    </div>
  );
}

export default Loading;
