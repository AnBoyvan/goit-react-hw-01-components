import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList/FriendList.module.css';
import FriendItem from 'components/FriendList/FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
