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
