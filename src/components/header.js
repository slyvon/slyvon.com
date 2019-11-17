import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Avatar from "../images/sly-avatar-main.svg"
import { ThemeProvider } from 'theme-ui'
import theme from "../styles/theme"


// Styled Components
const NavBar = styled.header`
	position: sticky;
	background: ${props => props.theme.colors.navBG};
	top: 0;
	z-index: 100;
	box-sizing: border-box;
	display: table;
	width: 100%;
	max-width: ${props => props.theme.tachyons.maxwidth.mw8};
	margin-right: auto;
	margin-left: auto;
	padding-top: ${props => props.theme.tachyons.spacing.s3};
	padding-bottom: ${props => props.theme.tachyons.spacing.s3};
	margin-bottom: 4rem;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: rgba(0, 0, 0, 0.05);
`

const Brand = styled.div`
	display: table;
	font-size: ${props => props.theme.tachyons.size.f4};
	font-weight: ${props => props.theme.tachyons.weight.fw7};
	letter-spacing: ${props => props.theme.tachyons.letterspacing.tight};
	vertical-align: bottom;
`

const HomeAvatarImg = styled.img`
	width: 40px;
	height: auto;
`

const LinkLogo = styled(Link)`
	color: rgba(0, 0, 0, 0.8);
	text-decoration: none;
`

const Menu = styled.div`
	width: 80%;
	display: table-cell;
	text-align: right;
	text-transform: uppercase;
	font-size: ${props => props.theme.tachyons.size.f6};
	vertical-align: middle;
`

const LinkNavItem = styled(Link)`
	margin-right: 1rem;
	text-decoration: none;
	color: ${props => props.theme.colors.navLink};
	display: inline-block;

	:hover {
		color: ${props => props.theme.colors.navLinkHover};
	}
`


// Output
const Header = () => (
	<ThemeProvider theme={theme}>
	<NavBar>
		<Brand>
			<LinkLogo to="/">
				<HomeAvatarImg src={Avatar} />
			</LinkLogo>
		</Brand>
		<Menu>
			<LinkNavItem to="/blog">Blog</LinkNavItem>
			<LinkNavItem to="/tools">Tools</LinkNavItem>
			<LinkNavItem to="/work">Work</LinkNavItem>
		</Menu>
	</NavBar>
	</ThemeProvider>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
