import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  box-sizing: border-box;
`;

export const NavLinksContainer = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;
  box-sizing: border-box;
`;

export const NavLinks = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;