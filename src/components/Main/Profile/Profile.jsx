import PropTypes from 'prop-types';
import s from './Profile.module.css';
import iconFollowers from '../../../assets/images/followers_icon.svg';
import iconFollowing from '../../../assets/images/following_icon.svg';

function Profile({ data }) {
  const logo = data.avatar_url;
  const { name, login, followers, following } = data;
  const url = data.html_url;
  return (
    <div className={s.profile}>
      <img className={s.logo} src={logo} alt="profile" />
      <h2 className={s.title}>{name}</h2>
      <a className={s.link} href={url} target="_blank" rel="noreferrer">
        {login}
      </a>
      <div className={s.info}>
        <img className={s.info__image} src={iconFollowers} alt="followers" />
        <span className={s.info__text}>{followers} followers</span>
        <img className={s.info__image} src={iconFollowing} alt="following" />
        <span className={s.info__text}>{following} following</span>
      </div>
    </div>
  );
}

Profile.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
  }),
};

Profile.defaultProps = {
  data: {
    avatar_url: null,
    name: null,
    login: null,
    html_url: null,
    followers: 0,
    following: 0,
  },
};

export default Profile;
