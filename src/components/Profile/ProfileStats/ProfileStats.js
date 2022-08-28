import PropTypes from 'prop-types';

import { Stats, Item, Label, Quantity } from './ProfileStats.styled';

export const ProfileStats = ({ followers, views, likes }) => {
    return (
        <Stats>
            <Item>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </Item>
            <Item>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </Item>
            <Item>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </Item>
        </Stats>
    )
};

ProfileStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}