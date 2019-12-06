import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import Body from "../components/Body"
import { Styled } from 'theme-ui'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Uh oh — page not found" />
		<center>
		<Body>
			<Styled.h1>Error 4<span role="img" aria-label="Uh oh">😮</span>4</Styled.h1>
			<Styled.p>The page you're trying to access has been moved or doesn't exist.</Styled.p>
      <Styled.p><Styled.a as={Link}>Click here</Styled.a> to go back to the home page.</Styled.p>
		</Body>
		</center>
	</Layout>
)

export default NotFoundPage
