import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Avatar from "../images/sly-avatar-main.svg"
import { useColorMode } from "theme-ui"


// Styled Components
const NavBar = styled.header`
	position: sticky;
	background: ${props => props.theme.colors.background};
	transition: all .4s ease;
	top: 0;
	z-index: 100;
	box-sizing: border-box;
	display: table;
	width: 100%;
	max-width: ${props => props.theme.tachyons.maxwidth.mw8};
	margin-right: auto;
	margin-left: auto;
	padding-top: ${props => props.theme.tachyons.spacing.s2};
	padding-bottom: ${props => props.theme.tachyons.spacing.s2};
	margin-bottom: 4rem;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: rgba(0, 0, 0, 0.05);
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

const DarkModeIcon = styled.label`
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;


	input {
  display: none;
	
        & + p {
            border-radius: 50%;
            width: 36px;
            height: 36px;
            position: relative;
            box-shadow: inset 13px -13px 0 0 ${props => props.theme.colors.gray};
            transform: scale(0.5) rotate(-2deg);
            transition: box-shadow .5s ease 0s, transform .4s ease .1s;
            &:before {
                content: '';
                width: inherit;
                height: inherit;
                border-radius: inherit;
                position: absolute;
                left: 0;
                top: 0;
                transition: background .3s ease;
            }
            &:after {
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin: -4px 0 0 -4px;
                position: absolute;
                top: 50%;
                left: 50%;
                box-shadow: 0 -23px 0 ${props => props.theme.colors.gray}, 0 23px 0 ${props => props.theme.colors.gray}, 23px 0 0 ${props => props.theme.colors.gray}, -23px 0 0 ${props => props.theme.colors.gray}, 15px 15px 0 ${props => props.theme.colors.gray}, -15px 15px 0 ${props => props.theme.colors.gray}, 15px -15px 0 ${props => props.theme.colors.gray}, -15px -15px 0 ${props => props.theme.colors.gray};
                transform: scale(0);
                transition: all .3s ease;
            }
        }
        &:checked + p {
            box-shadow: inset 32px -32px 0 0 ${props => props.theme.colors.gray};
            transform: scale(.35) rotate(0deg);
            transition: transform .3s ease .1s, box-shadow .2s ease 0s;
            &:before {
                background: ${props => props.theme.colors.gray};
                transition: background .3s ease .1s;
            }
            &:after {
                transform: scale(1.3);
                transition: transform .5s ease .15s;
            }
        }
	}
`


// Output
const Header = () => {
	const [colorMode, setColorMode] = useColorMode()
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
			
			<DarkModeIcon>
			<input type="checkbox" onClick={e => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }} />
				<p></p>
			</DarkModeIcon>

		</Menu>
	</NavBar>

)}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
