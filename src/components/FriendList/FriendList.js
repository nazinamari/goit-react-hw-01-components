import { FriendListItem } from "./FriendItem/FriendItem";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};