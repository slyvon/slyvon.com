import React from "react"
import styled from "@emotion/styled"
import Avatar from "../images/sly-avatar-main.svg"

// Styled Components
const Box = styled.div`
	background-color: ${props => props.theme.colors.authorboxBG};
	margin-top: ${props => props.theme.tachyons.spacing.s4};
	margin-bottom: ${props => props.theme.tachyons.spacing.s4};
	padding: ${props => props.theme.tachyons.spacing.s4};
	border: 1px solid ${props => props.theme.colors.authorboxBorder};
	border-radius: ${props => props.theme.tachyons.borderRadius.br2};
`

const AuthorBoxContent = styled.p`
	font-size: 16px !important;
	margin-bottom: 0px !important;
	
`

const AboutTheAuthor = styled.h5`
	margin-top: 0px;
	margin-bottom: ${props => props.theme.tachyons.spacing.s2};
			font-size: ${props => props.theme.tachyons.size.f3};
			letter-spacing: ${props => props.theme.tachyons.letterspacing.tight};
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
