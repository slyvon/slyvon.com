import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
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
			<Menu>
			<LinkLogo to="/">
					slyvon<Accent>.</Accent>
				</LinkLogo>
			<LinkNavItem to="/about">About</LinkNavItem>
				<LinkNavItem to="/blog">Words</LinkNavItem>
				<LinkNavItem to="/things">Things</LinkNavItem>

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
	transition: all 0.4s ease;
	top: 0;
	z-index: 100;
	box-sizing: border-box;
	display: table;
	width: 100%;
	max-width: ${props => props.theme.tachyons.maxwidth.mw9};
	margin-right: auto;
	margin-left: auto;
	padding-top: ${props => props.theme.tachyons.spacing.s4};
	padding-bottom: ${props => props.theme.tachyons.spacing.s4};
	margin-bottom: 4rem;
	@media all and (max-width: 800px) {
		background: ${props => props.theme.colors.background};
		padding-top: ${props => props.theme.tachyons.spacing.s3};
	padding-bottom: ${props => props.theme.tachyons.spacing.s3};
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: ${props => props.theme.colors.border};
		}
`

const Accent = styled.span`
      color: ${props => props.theme.colors.secondary};
`

// const Brand = styled.div`
// 	display: table-cell;
// 	vertical-align: middle;
// `

// const HomeAvatarImg = styled.img`
// 	width: 40px;
// 	height: auto;
// `

const LinkLogo = styled(Link)`
margin-right: 1rem;
	color: ${props => props.theme.colors.primary};
	font-size: ${props => props.theme.tachyons.size.f6};
	font-weight: ${props => props.theme.tachyons.weight.fw9};
	text-decoration: none;
	text-transform: lowercase;
`

const Menu = styled.div`
	width: 80%;
	display: table-cell;
	text-align: right;
	vertical-align: middle;
`

const LinkNavItem = styled(Link)`
	margin-right: 1rem;
	text-decoration: none;
	text-transform: lowercase;
	color: ${props => props.theme.colors.gray};
	display: inline-block;
	font-size: 14px;
	:hover {
		color: ${props => props.theme.colors.primary};
	}
`
// Dark mode sun/moon
const DarkModeIcon = styled.button`
	opacity: 0.5;
	margin-bottom: 2px;
	padding-left: 0;
	cursor: pointer;
	outline: transparent;
	position: relative;
	border-radius: 5px;
	display: inline-block;
	transition: background-color 0.4s ease;
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
