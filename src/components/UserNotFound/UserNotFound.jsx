import s from './UserNotFound.module.css';
import icon from '../../assets/images/user_icon.svg';

function UserNotFound() {
  return (
    <div className={s.user}>
      <img className={s.image} src={icon} alt="user" />
      <span className={s.text}>User not found</span>
    </div>
  );
}

export default UserNotFound;
