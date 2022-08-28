export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li id={id}>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};