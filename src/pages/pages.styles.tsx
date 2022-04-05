import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  border-bottom: 1px solid;
  display: block;
  color: ${(props) => props.theme.accent};
  /* background-color: ${(props) => props.theme.background}; */
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 10px 0;
`;
export const Label = styled.label`
  font-size: 18px;
  color: ${(props) => props.theme.highlight};
`;
export const Select = styled.select`
  border-radius: 10px;
  border: none;
  padding: 5px 20px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;
export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;
export const Error = styled.p`
  color: crimson;
  font-weight: 600;
  background-color: rgba(252, 57, 96, 0.466);
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;

export const Button = styled.button`
  border: 1px solid;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.text};
  }
`;

export const HL = styled.hr`
  border: 2px solid;
  color: ${(props) => props.theme.text};
`;
