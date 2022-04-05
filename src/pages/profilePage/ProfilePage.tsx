import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { HL, Title, Wrapper } from "../pages.styles";

type Props = {};

const ProfilePage: React.FC = (props: Props) => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Title>Profile</Title>
      <ProfileCard>
        <PCLeft>
          <h3>{user?.username}</h3>
          <p>
            first name: <Bold>{user?.firstName}</Bold>
          </p>
          <p>
            last name: <Bold>{user?.lastName}</Bold>
          </p>
          <p>
            email: <Bold>{user?.email}</Bold>
          </p>
        </PCLeft>
        <PCRight>
          <img src={user?.avatar} alt="" />
        </PCRight>
      </ProfileCard>
    </Wrapper>
  );
};

const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
`;
const PCLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const PCRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  img {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
const Bold = styled.span`
  font-weight: bold;
`;
export default ProfilePage;
