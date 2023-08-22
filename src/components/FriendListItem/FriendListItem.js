import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ friend: {avatar, name, isOnline } }) => {
    return (
        <FriendItem>
            <FriendStatus $status={isOnline}>{isOnline}</FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}