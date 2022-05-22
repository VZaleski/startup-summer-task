import PropTypes from 'prop-types';
import s from './OneRepository.module.css';

function OneRepository({ name, description, url }) {
  return (
    <div className={s.oneRepository}>
      <a className={s.title} href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
      <p className={s.description}>{description}</p>
    </div>
  );
}

OneRepository.propTypes = {
  name: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  url: PropTypes.string,
};

OneRepository.defaultProps = {
  name: null,
  description: null,
  url: null,
};

export default OneRepository;
