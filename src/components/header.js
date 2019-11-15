import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Avatar from "../images/sly-avatar-main.svg"
import { colors } from "../utils/styles"

// Styled Components
const NavBar = styled.header`
	position: sticky;
	background: ${colors.navBG};
	top: 0;
	z-index: 100;
	box-sizing: border-box;
	display: table;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 4rem;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: rgba(0, 0, 0, 0.05);
`

const Brand = styled.div`
	display: table;
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
`

const LinkNavItem = styled(Link)`
	margin-right: 1rem;
	text-decoration: none;
	color: ${colors.navLink};
	display: inline-block;

	:hover {
		color: ${colors.navLinkHover};
	}
`

// Output
const Header = () => (
	<NavBar className="mw8 pv3">
		<Brand className="f4 fw7 tracked-tight v-btm">
			<LinkLogo to="/">
				<HomeAvatarImg src={Avatar} />
			</LinkLogo>
		</Brand>
		<Menu className="f6 v-mid">
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
