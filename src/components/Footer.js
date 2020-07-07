import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const FooterArea = styled.div`
	margin: 0 auto;
	padding-top: 2rem;
	padding-bottom: 2rem;
	max-width: ${props => (props.wide ? "64rem" : "555px")};
	display: table;
	width: 100%;
`

const FooterText = styled.footer`
	color: ${props => props.theme.colors.muted};
	font-size: ${props => props.theme.tachyons.size.f6};
	text-align: left;
`

const FooterLink = styled(Link)`
	color: ${props => props.theme.colors.muted};
	text-decoration: none;
`

const Footer = () => {
	return (
		
		<FooterArea>
			<FooterText>
				© {new Date().getFullYear()} — Made by{" "}
				<FooterLink to="/">Sly</FooterLink> using GatsbyJS
			</FooterText>
		</FooterArea>
	
	)
}

export default Footer
