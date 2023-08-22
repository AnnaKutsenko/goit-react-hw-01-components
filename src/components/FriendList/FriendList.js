import PropTypes from 'prop-types';
import { FriendListItem} from '../FriendListItem/FriendListItem';
import { FriendListWrap, FriendItem } from '../FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListWrap >
            {friends.map((friend) =>
                <FriendItem key={friend.id}>
                    <FriendListItem friend={friend} />
                </FriendItem>
            )}
        </FriendListWrap>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired,
}; 