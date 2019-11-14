import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'

// Styled Components
const NavBar = styled.header`
  box-sizing: border-box;
  display: table;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: rgba(0,0,0,.05);
`;

const Brand = styled.div`
  display: table;
`;

const LinkLogo = styled(Link)`
  color: rgba(0,0,0,.8);
  text-decoration: none;
`;

const Menu = styled.div`
  width: 80%;
  display: table-cell;
  text-align: right;
  text-transform: uppercase;
`;
  
const LinkNavItem = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  color: #777;
  display: inline-block;
  
    :hover {
    color: #444;
    } 

`;

const DarkModeLink = styled.a`
  text-decoration: none;
`;

const DarkModeIcon = styled.svg`
height: 17px;
  width: 17px;
  display: block;
  float: right;
  fill: #777;
`;
 
// Output
  const Header = () => (
  <NavBar className="mw8 pa3">
    <Brand className="f4 fw7 tracked-tight">
      <LinkLogo to="/">slyvon<span class="fw3">blanco</span></LinkLogo>
    </Brand>
   <Menu className="f6 fw3">
      <LinkNavItem to="/blog">Blog</LinkNavItem>
      <LinkNavItem to="/tools">Tools</LinkNavItem>
      <LinkNavItem to="/work">Work</LinkNavItem>
  </Menu>
</NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
