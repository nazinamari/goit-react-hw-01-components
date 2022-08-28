import PropTypes from 'prop-types';
import { Description, Avatar, Name, Tag, Location } from './ProfileInfo.styled';

export const ProfileInfo = ({ avatar, username, tag, location,}) => {
    return (
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"/> 
            <Name>{username}</Name>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
        </Description>
    )
};

ProfileInfo.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}
