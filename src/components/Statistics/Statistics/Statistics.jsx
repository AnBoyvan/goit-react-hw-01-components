import PropTypes from 'prop-types';
import StatList from 'components/Statistics/StatList/StatList';
import css from 'components/Statistics/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatList stats={stats} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
