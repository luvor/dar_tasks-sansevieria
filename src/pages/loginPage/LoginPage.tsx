import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { basename } from "../../assets/vars";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../types";
import {
  Wrapper,
  Title,
  InputGroup,
  Input,
  Label,
  Button,
} from "../pages.styles";

type Props = {};

const LoginPage: React.FC = (props: Props) => {
  const { user, userHandler } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSumbit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    userHandler({
      id: 0,
      username: username,
      password: password,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dmitry_Medvedev_govru_official_photo_2.jpg/248px-Dmitry_Medvedev_govru_official_photo_2.jpg",
      email: "bearboy1965@union.com",
      firstName: "Medved",
      lastName: "Ev",
      isAdmin: false,
    });
    navigate(`${basename}/`);
  };
  return (
    <Wrapper>
      <Title>Login</Title>
      <form onSubmit={(e) => handleSumbit(e)}>
        <InputGroup>
          <Label>Username</Label>
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={user?.username}
          />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={user?.password}
          />
        </InputGroup>
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
