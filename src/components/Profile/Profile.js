import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";

import { Box } from '../Box';

export const Profile = ({ user: { username, tag, location, avatar, stats }}) => {
    return (
        <Box as="section" width="300px" m="0 auto" mb="50px" >
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
