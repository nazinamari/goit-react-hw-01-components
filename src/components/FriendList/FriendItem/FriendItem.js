import { Item } from './FriendItem.styled'

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item id={id}>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};