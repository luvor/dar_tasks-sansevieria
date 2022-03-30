import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../contexts/ThemeContext";

type Props = {};

const SideBar = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Nav>
      <h2>SideBar</h2>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/"
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
            <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
          </g>
        </svg>
        Home
      </NavLink>
      <NavLink to="/movies/all">
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            d="M3 9h18M3 9v6m0-6V5a2 2 0 0 1 2-2h4m12 6v6m0-6V5a2 2 0 0 0-2-2h-4M3 15v4a2 2 0 0 0 2 2h4m-6-6h18m0 0v4a2 2 0 0 1-2 2h-4M9 3v18M9 3h6M9 21h6m0-18v18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        All&nbsp;movies
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "")}
        to="/settings"
      >
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </g>
        </svg>
        Settings
      </NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 100vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px;
  border-right: 1px solid;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  h2 {
    padding: 10px 20px;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    text-indent: 5px;
    justify-content: flex-start;
    padding: 10px 20px;
    border-radius: 15px;
    color: ${(props) => props.theme.text};
    svg {
      width: 16px;
      height: 16px;
      transition: 0ms;
    }
  }
  .active {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

export default SideBar;
