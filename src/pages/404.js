import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Body } from "../components/layout"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Body>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Body>
	</Layout>
)

export default NotFoundPage
