import PropTypes from 'prop-types';
import StatItem from 'components/Statistics/StatItem/StatItem';
import css from 'components/Statistics/StatList/StatList.module.css';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage}></StatItem>
      ))}
    </ul>
  );
};

export default StatList;

StatList.defaultProps = {
  stats: [],
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
