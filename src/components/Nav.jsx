import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About us</a>
        </li>
        <li>
          <a href="#">2. Our work</a>
        </li>
        <li>
          <a href="#">3. Contact us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav;
