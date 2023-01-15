import css from 'components/TransactionHistory/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionHistory/TransactionItem/TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.list}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionItem>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
