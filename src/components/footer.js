import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors, tachyons } from "../styles/theme"

// Styled Components

const FooterArea = styled.footer`
	margin-right: auto;
	margin-left: auto;
	margin-top: 2rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	text-align: center;
`

const FooterText = styled.footer`
	display: block;
	color: ${colors.footerText};
	font-size: ${tachyons.size.f6};
`

const FooterLink = styled(Link)`
	color: ${colors.footerLink};
	text-decoration: none;
`

const Footer = () => {
	return (
		<FooterArea>
			<FooterText>
				© {new Date().getFullYear()} — Handcrafted by{" "}
				<FooterLink to="/">Sly</FooterLink> using GatsbyJS
			</FooterText>
		</FooterArea>
	)
}

export default Footer
