import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";
import user from './user.json';

export const Profile = () => {
    return <>
        <ProfileInfo
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <ProfileStats
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
    </>
};