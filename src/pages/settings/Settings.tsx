import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../assets/colors";
import { basename } from "../../assets/vars";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../../types";
import {
  Wrapper,
  Title,
  InputGroup,
  Input,
  Select,
  Label,
  Error,
  HL,
  Button,
} from "../pages.styles";

type Props = {};

const Settings = (props: Props) => {
  const { themeHandler, theme } = useContext(ThemeContext);
  const { userHandler, user } = useContext(UserContext);
  const [error, setError] = useState<string | null>("");
  const [userFields, setUserFields] = useState<User>({
    id: 0,
    firstName: "first name",
    lastName: "last name",
    email: "email@email.com",
    isAdmin: false,
    username: "username",
    password: "password",
  });

  let navigate = useNavigate();
  //   const getKeyValue =
  //   <U extends keyof T, T extends object>(key: U) =>
  //   (obj: T) =>
  //     obj[key];
  // export interface IObjectKeys {
  //   [key: string]: string | number;
  // }
  //   const handleSetTheme = (e: { target: { value: any } }) => {
  //     const va = e.target.value;
  //     themeHandler(getKeyValue<keyof Object, Object>(va)(colors));

  //     const getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

  //   const {userFields, setUserFields} = useState<User>({
  //     username: user?.username,
  //     avatar: user?.avatar,
  //     firstName: user?.firstName,
  //     lastName: user?.lastName,
  //     isAdmin: user?.isAdmin
  // })

  useEffect(() => {
    if (user) {
      setUserFields(user);
    }
  }, []);

  const handleSetUser = (e: SyntheticEvent) => {
    e.preventDefault();
    userHandler(userFields);
    navigate(`${basename}/`);
  };

  const handleSetTheme = (e: { target: { value: string } }) => {
    const val = e.target.value;
    const res = colors.filter((item) => item.title === val);
    themeHandler(res[0]);
  };

  return (
    <Wrapper>
      <Title>Settings</Title>
      {error ? <Error>{error}</Error> : ""}
      <form onSubmit={handleSetUser}>
        <InputGroup>
          <Label>Theme</Label>
          <Select onChange={handleSetTheme}>
            {colors.map((item) => {
              return (
                <option key={item.title} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </Select>
        </InputGroup>
        <HL />
        <InputGroup>
          <Label>Username</Label>
          <Input
            type="text"
            onChange={(e) =>
              setUserFields({ ...userFields, username: e.target.value })
            }
            value={userFields?.username}
          />
        </InputGroup>
        <InputGroup>
          <Label>First name</Label>
          <Input
            type="text"
            onChange={(e) =>
              setUserFields({ ...userFields, firstName: e.target.value })
            }
            value={userFields?.firstName}
          />
        </InputGroup>
        <InputGroup>
          <Label>Last name</Label>
          <Input
            type="text"
            onChange={(e) =>
              setUserFields({ ...userFields, lastName: e.target.value })
            }
            value={userFields?.lastName}
          />
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            onChange={(e) =>
              setUserFields({ ...userFields, email: e.target.value })
            }
            value={userFields?.email}
          />
        </InputGroup>
        <InputGroup>
          <Label>Avatar</Label>
          <Input
            type="text"
            onChange={(e) =>
              setUserFields({ ...userFields, avatar: e.target.value })
            }
            value={userFields?.avatar}
          />
        </InputGroup>
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default Settings;
