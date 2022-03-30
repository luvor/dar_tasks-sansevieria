import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Wrapper, Title } from "../pages.styles";

type Props = {};

function IndexPage({}: Props) {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Title>IndexPage</Title>
      <p>Hello, {user?.username}!</p>
    </Wrapper>
  );
}

export default IndexPage;
