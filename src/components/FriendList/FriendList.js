import { FriendListItem } from "./FriendItem/FriendItem";
import PropTypes from 'prop-types';

import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box as="section" m="0 auto" mb="50px">
        <Box as="ul" width="220px" m="0 auto">
          {friends.map(({ id, isOnline, avatar, name }) => (
            <FriendListItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
          ))}
        </Box>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};