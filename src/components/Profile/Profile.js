import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";

export const Profile = ({ user: { username, tag, location, avatar, stats }}) => {
    return (
        <>
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
        </>
    )
};
