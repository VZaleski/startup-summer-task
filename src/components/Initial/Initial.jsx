import s from './Initial.module.css';
import icon from '../../assets/images/magnifer_initial.svg';

function Initial() {
  return (
    <div className={s.initial}>
      <img className={s.image} src={icon} alt="magnifer" />
      <span className={s.text}>Start with searching a GitHub user</span>
    </div>
  );
}

export default Initial;
