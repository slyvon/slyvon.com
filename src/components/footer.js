import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

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
	color: ${props => props.theme.colors.gray};
	font-size: ${props => props.theme.tachyons.size.f6};
`

const FooterLink = styled(Link)`
	color: ${props => props.theme.colors.gray};
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
