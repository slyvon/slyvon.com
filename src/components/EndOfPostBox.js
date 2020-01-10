import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Box = styled.div`
	background: ${props => props.theme.colors.EndOfPostBoxBG};
	margin-top: ${props => props.theme.tachyons.spacing.s4};
	margin-bottom: ${props => props.theme.tachyons.spacing.s4};
	padding: ${props => props.theme.tachyons.spacing.s4};
	border-radius: ${props => props.theme.tachyons.borderRadius.br2};
	box-shadow: rgba(0,0,0,0.05) 0 0 0 1px ;
							/** Above box shadow is a border */
							
`

const Content = styled.p`
	margin-bottom: 0px !important;
	line-height: 1.4;
	vertical-align: middle;
`

const Headline = styled.h5`
	margin-top: 0px;
	margin-bottom: ${props => props.theme.tachyons.spacing.s2};
	font-size: ${props => props.theme.tachyons.size.f3};
	letter-spacing: ${props => props.theme.letterSpacings.heading};
`

const AuthorBoxImg = styled(Img)`
	float: right;
	border-radius: 100%;
	margin: 1rem 0 1rem 1rem;
`


const EndOfPostBox = () => {
	const data = useStaticQuery(graphql`
	query Images {
    image: file(relativePath: { eq: "images/profile2.png" }) {
      childImageSharp {
        fixed (width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
	}
	`)
	console.log(data)
	return (
		<Box>
			<Headline>About the Author</Headline>
			<Content>
			<AuthorBoxImg fixed={data.image.childImageSharp.fixed} />
				Slyvon Blanco is an independent business strategist, web designer and
				developer, and a copywriter. When he's not talking about himself in 3rd
				person, you'll most likely find him at a coffee shop drinking a flat
				white, at a gym lifting heavy things, or at a restaurant eating chicken
				wings.
			</Content>
		</Box>
	)
}

export default EndOfPostBox
