import PropTypes from 'prop-types';
import { Avatar, Name, Tag, Location } from './ProfileInfo.styled';
import { Box } from '../../Box';

export const ProfileInfo = ({ avatar, username, tag, location,}) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignContent='center'
            justifyContent='space-evenly'
            alignItems='center'
            backgroundColor='white'
            border='normal'
            borderRadius='top'
            borderBottom='none'
            >
            <Avatar
                src={avatar}
                alt="User avatar"/> 
            <Name>{username}</Name>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
        </Box>
    )
};

ProfileInfo.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}
