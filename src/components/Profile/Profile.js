import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";

import { Box } from '../Box';

export const Profile = ({ user: { username, tag, location, avatar, stats }}) => {
    return (
        <Box m="auto" width="300px" height="400px">
            <ProfileInfo
                username={username}
                tag={tag}
                location={location}
                avatar={avatar}
            />
            <ProfileStats
                followers={stats.followers}
                views={stats.views}
                likes={stats.likes}
            />
        </Box>
    )
};
