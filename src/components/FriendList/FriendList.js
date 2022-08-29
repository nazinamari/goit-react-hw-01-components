import { FriendListItem } from "./FriendItem/FriendItem";
import PropTypes from 'prop-types';


import { List } from './FriendList.styled';
import { Section } from "components/utils/Section";

export const FriendList = ({ friends }) => {
  return (
    <Section>
        <List>
          {friends.map(({ id, isOnline, avatar, name }) => (
            <FriendListItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
          ))}
        </List>
    </Section>
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