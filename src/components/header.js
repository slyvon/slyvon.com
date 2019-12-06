import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Avatar from "../images/sly-avatar-main.svg"
import { useColorMode } from "theme-ui"

// Output
const Header = () => {
	const [colorMode, setColorMode] = useColorMode()
	const isDark = colorMode === `dark`

	function toggleColorMode(event) {
		event.preventDefault()
		setColorMode(isDark ? `light` : `dark`)
	}

	return (
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

				<DarkModeIcon
					isDark={isDark}
					onClick={toggleColorMode}
					data-a11y="false"
					aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
					title={isDark ? "Activate light mode" : "Activate dark mode"}
				>
					<MoonOrSun isDark={isDark} />
					<MoonMask isDark={isDark} />
				</DarkModeIcon>
			</Menu>
		</NavBar>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header

// Styling
const NavBar = styled.header`
	position: sticky;
	background: ${props => props.theme.colors.background};
	transition: all 0.4s ease;
	top: 0;
	z-index: 100;
	box-sizing: border-box;
	display: table;
	width: 100%;
	max-width: ${props => props.theme.tachyons.maxwidth.mw9};
	margin-right: auto;
	margin-left: auto;
	padding-top: ${props => props.theme.tachyons.spacing.s2};
	padding-bottom: ${props => props.theme.tachyons.spacing.s2};
	margin-bottom: 4rem;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: ${props => props.theme.colors.border};
`

const Brand = styled.div`
	display: table-cell;
	font-size: ${props => props.theme.tachyons.size.f4};
	font-weight: ${props => props.theme.tachyons.weight.fw7};
	letter-spacing: ${props => props.theme.tachyons.letterspacing.tight};
	vertical-align: middle;
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
	color: ${props => props.theme.colors.gray};
	display: inline-block;
	vertical-align: middle;

	:hover {
		color: ${props => props.theme.colors.primary};
	}
`
// Dark mode sun/moon
const DarkModeIcon = styled.button`
	opacity: 0.5;
	cursor: pointer;
	outline: transparent;
	position: relative;
	border-radius: 5px;
	display: inline-block;
	transition: background-color 0.3s ease;
	background-color: ${props => props.theme.colors.background};
	border: ${props => props.theme.colors.background};
	vertical-align: middle;

	&:hover {
		opacity: 1;
	}

	&[data-a11y="true"]:focus::after {
		content: "";
		position: absolute;
		left: 0;
		top: -30%;
		width: 100%;
		height: 160%;
	}
`

const MoonOrSun = styled.div`
	position: relative;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	border: ${props => props.theme.colors.gray} solid
		${props => props.theme.colors.gray};
	background: ${props => props.theme.colors.gray};
	transform: scale(${props => (props.isDark ? 0.4 : 1)});
	transition: all 0.4s ease;
	overflow: ${props => (props.isDark ? "visible" : "hidden")};

	&::before {
		content: "";
		position: absolute;
		right: -9px;
		top: -9px;
		height: 20px;
		width: 20px;
		border: 2px solid ${props => props.theme.colors.gray};
		border-radius: 50%;
		transform: translate(${props => (props.isDark ? "14px, -14px" : "0, 0")});
		opacity: ${props => (props.isDark ? 0 : 1)};
		transition: transform 0.4s ease;
	}

	&::after {
		content: "";
		width: 7px;
		height: 7px;
		border-radius: 50%;
		margin: -3px 0 0 -4px;
		position: absolute;
		top: 50%;
		left: 50%;
		box-shadow: 0 -20px 0 ${props => props.theme.colors.gray},
			0 20px 0 ${props => props.theme.colors.gray},
			20px 0 0 ${props => props.theme.colors.gray},
			-20px 0 0 ${props => props.theme.colors.gray},
			15px 15px 0 ${props => props.theme.colors.gray},
			-15px 15px 0 ${props => props.theme.colors.gray},
			15px -15px 0 ${props => props.theme.colors.gray},
			-15px -15px 0 ${props => props.theme.colors.gray};
		transform: scale(${props => (props.isDark ? 1 : 0)});
		transition: all 0.4s ease;
	}
`

const MoonMask = styled.div`
	position: absolute;
	right: -1px;
	top: -6px;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	border: 0;
	background: ${props => props.theme.colors.background};
	transform: translate(${props => (props.isDark ? "14px, -14px" : "0, 0")});
	opacity: ${props => (props.isDark ? 0 : 1)};
	transition: background 0.4s ease, color 0.4s ease, transform 0.4s ease;
`
