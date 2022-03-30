import React, { useContext, useState } from "react";
import styled from "styled-components";
import colors from "../../assets/colors";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";
import { Wrapper, Title } from "../pages.styles";

type Props = {};

const Settings = (props: Props) => {
  const [error, setError] = useState<string | null>(null);
  const { themeHandler, theme } = useContext(ThemeContext);
  const { userHandler, user } = useContext(UserContext);

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
  const handleSetUsername = (e: { target: { value: string } }) => {
    const val = e.target.value;
    if (user) {
      userHandler({ ...user, username: val });
    } else {
      setError("No user found");
      userHandler({
        id: 0,
        username: val,
        firstName: "Alo",
        lastName: "Dobri",
        email: "alo@alo.com",
        isAdmin: false,
      });
    }
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
      <InputGroup>
        <Label>User</Label>
        <Input
          type="text"
          onChange={handleSetUsername}
          value={user?.username}
        />
      </InputGroup>
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
    </Wrapper>
  );
};

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 10px 0;
`;
const Label = styled.label`
  font-size: 18px;
  color: ${(props) => props.theme.highlight};
`;
const Select = styled.select`
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;
const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;
const Error = styled.p`
  color: crimson;
  font-weight: 600;
  background-color: rgba(252, 57, 96, 0.466);
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;

export default Settings;
