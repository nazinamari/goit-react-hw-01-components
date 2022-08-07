import css from './ProfileStats.css';

export const ProfileStats = ({ followers, views, likes }) => {
    return (
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    )
};