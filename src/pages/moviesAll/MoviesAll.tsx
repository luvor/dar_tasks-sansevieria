import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Wrapper, Title } from "../pages.styles";

type Props = {};

const MoviesAll = (props: Props) => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Title>MoviesAll</Title>
      <p>Watch all the movies , {user?.username}!</p>
    </Wrapper>
  );
};

export default MoviesAll;
