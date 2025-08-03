import PropTypes from "prop-types";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 300px;
  background-color: #f3f6f9;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const Description = styled.div`
  padding: 30px;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
`;

const Tag = styled.p`
  color: gray;
  margin: 5px 0;
`;

const Location = styled.p`
  color: gray;
  margin: 5px 0;
`;

const Stats = styled.ul`
  display: flex;
  background-color: #e7ecf2;
  border-top: 1px solid #dcdcdc;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatsItem = styled.li`
  flex: 1;
  padding: 15px;
  border-right: 1px solid #dcdcdc;

  &:last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  display: block;
  font-size: 12px;
  color: gray;
`;

const Quantity = styled.span`
  font-weight: bold;
  margin-top: 5px;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
