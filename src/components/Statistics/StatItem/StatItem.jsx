import PropTypes from 'prop-types';
import css from 'components/Statistics/StatItem/StatItem.module.css';

export const StatItem = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
