import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileStats } from "./ProfileStats/ProfileStats";

import { Section } from '../utils/Section';
import { Container } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats }}) => {
    return (
        <Section>
            <Container>
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
            </Container>
        </Section>
    )
};
