import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const NavBar = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/Menu">Menű</Link>
    <Link to="/About">About</Link>
  </Nav>
);

export default NavBar;
