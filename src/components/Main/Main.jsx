import PropTypes from 'prop-types';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Repositories from './Repositories/Repositories';
import EmptyList from './EmptyList/EmptyList';

function Main({ data, dataRepos }) {
  let error = false;
  if (dataRepos.length) {
    error = false;
  } else {
    error = true;
  }
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Profile data={data} />
        {error && <EmptyList />}
        {!error && <Repositories dataRepos={dataRepos} />}
      </div>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
  }).isRequired,
  dataRepos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      html_url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Main;
