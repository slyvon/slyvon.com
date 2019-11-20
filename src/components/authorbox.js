import React from "react"
import styled from "@emotion/styled"
import BioImage from "../images/profile2.png"
import theme from "../gatsby-plugin-theme-ui/index"

const Box = styled.div`
	background: ${props => props.theme.colors.authorboxBG};
	margin-top: ${props => props.theme.tachyons.spacing.s4};
	margin-bottom: ${props => props.theme.tachyons.spacing.s4};
	padding: ${props => props.theme.tachyons.spacing.s4};
	border-radius: ${props => props.theme.tachyons.borderRadius.br2};
	box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
`

const AuthorBoxContent = styled.p`
	margin-bottom: 0px !important;
	font-size: ${theme.fontSize1};
	line-height: 1.4;
`

const AboutTheAuthor = styled.h5`
	margin-top: 0px;
	margin-bottom: ${props => props.theme.tachyons.spacing.s2};
	font-size: ${props => props.theme.tachyons.size.f3};
	letter-spacing: ${props => props.theme.letterSpacings.heading};
`

const AuthorBoxImg = styled.img`
	float: right;
	width: 15%;
	border-radius: 100%;
	margin: 0 0 0 1rem;
`

const AuthorBox = () => {
	return (
		<Box>
			<AboutTheAuthor>About the Author</AboutTheAuthor>
			<AuthorBoxImg src={BioImage} />
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
