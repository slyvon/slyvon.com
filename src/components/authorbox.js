import React from "react"
import styled from "@emotion/styled"
import Avatar from "../images/sly-avatar-main.svg"
import { fonts, tachyons, colors } from "../styles/theme"

// Styled Components
const Box = styled.div`
	background-color: white;
	color: ${colors.bodyText};
	margin-top: ${tachyons.spacing.s4};
	margin-bottom: ${tachyons.spacing.s4};
	padding: ${tachyons.spacing.s4};
	line-height: ${fonts.lineHeights.bodyText};
	border: 1px solid lightgray;
	border-radius: ${tachyons.borderRadius.br2};
`

const AuthorBoxContent = styled.p`
	font-size: 16px !important;
	margin-bottom: 0px !important;
	
`

const AboutTheAuthor = styled.h5`
	margin-top: 0px;
	margin-bottom: ${tachyons.spacing.s2};
			font-size: ${tachyons.size.f3};
			letter-spacing: ${tachyons.letterspacing.tight};
			line-height: ${fonts.lineHeights.bodyText};
`

const AuthorBoxImg = styled.img`
	float: right;
	width: 20%;
	margin: 0 0 0 1rem;
	
`

const AuthorBox = () => {
	return (
		<Box>
			<AboutTheAuthor>
				About the Author
			</AboutTheAuthor>
			<AuthorBoxImg src={Avatar} />
			<AuthorBoxContent>
				Slyvon Blanco is an independent business strategist, web designer &
				developer, and a copywriter. When he's not talking about himself in 3rd
				person, you'll most likely find him at a coffee shop drinking a flat
				white, at a gym lifting heavy things, or at a restaurant eating chicken
				wings.
			</AuthorBoxContent>
		</Box>
	)
}

export default AuthorBox
