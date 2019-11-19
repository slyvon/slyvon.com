import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Body } from "../components/layout"
import { Styled } from 'theme-ui'

const NotFoundPage = () => (
	<Layout>
		<SEO title="Uh oh — page not found" />
		<center>
		<Body>
			<Styled.h1>Error 4😮4</Styled.h1>
			<p>The page you're trying to access has been moved or doesn't exist.</p>
      <p><Styled.a as={Link}>Click here</Styled.a> to go back to the home page.</p>
		</Body>
		</center>
	</Layout>
)

export default NotFoundPage
