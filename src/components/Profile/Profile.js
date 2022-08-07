import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";

export const Profile = ({user}) => {
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