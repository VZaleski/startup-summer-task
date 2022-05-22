import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.css';
import logo from '../../assets/images/git_logo.svg';
import magniferIcon from '../../assets/images/magnifer_icon.svg';

function Header({ sendInfoUser }) {
  const [username, setUsername] = useState('');
  const placeholder = 'Enter GitHub username';
  const getUsername = (event) => {
    if (event.code === 'Enter') {
      sendInfoUser(username);
    }
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img className={s.logo} src={logo} alt="logo" />
        <div className={s.search}>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={(event) => getUsername(event)}
            type="search"
            placeholder={placeholder}
            className={s.search__input}
          />
          <button type="submit" className={s.search__button}>
            <img className={s.search__icon} src={magniferIcon} alt="magnifer" />
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  sendInfoUser: PropTypes.func.isRequired,
};

export default Header;
