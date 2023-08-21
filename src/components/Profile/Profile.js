import PropTypes from 'prop-types';
import { Container } from './Profile.styled';
import { UserDescription } from './Profile.styled';
import { UserImg } from './Profile.styled';
import { UserName } from './Profile.styled';
import { UserTag } from './Profile.styled';
import { UserLocation } from './Profile.styled';
import { Stats } from './Profile.styled';
import { StatsItem } from './Profile.styled';
import { Label } from './Profile.styled';
import { Quantity } from './Profile.styled';
  
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <UserDescription className="description">
        <UserImg
          src={avatar}
          alt={username}
          className="avatar"
        />
        <UserName className="name">{username}</UserName>
        <UserTag className="tag">{tag}</UserTag>
        <UserLocation className="location">{location}</UserLocation>
      </UserDescription>

      <Stats className="stats">
        <StatsItem>
          <Label className="label">Followers: </Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views: </Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes: </Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  )
} 

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}
