import s from './EmptyList.module.css';
import icon from '../../../assets/images/empty.svg';

function EmptyList() {
  return (
    <div className={s.empty}>
      <img className={s.image} src={icon} alt="empty list" />
      <span className={s.text}>Repository list is empty</span>
    </div>
  );
}

export default EmptyList;
