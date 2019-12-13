import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"


const AvatarImg = styled(Img)`
	border-radius: 100%;
  margin-top: 0;
  margin-bottom: 0;
`


const Avatar = () => {
	const data = useStaticQuery(graphql`
	query Avatar {
    image: file(relativePath: { eq: "images/profile2.png" }) {
      childImageSharp {
        fixed (width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
	}
	`)
	console.log(data)
	return (
			<AvatarImg fixed={data.image.childImageSharp.fixed} />
	)
}

export default Avatar