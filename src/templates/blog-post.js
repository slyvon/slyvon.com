import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Body } from "../components/layout"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/layout"
import AuthorBox from "../components/authorbox"

export const pageQuery = graphql`
	query MdxBlogPost($slug: String) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
			}
			body
		}
	}
`

export default function PageTemplate({ data: { mdx } }) {
	return (
		<Layout>
			<SEO title={mdx.frontmatter.title} />
			<Body>
				<PageTitle>{mdx.frontmatter.title}</PageTitle>
				<MDXRenderer>{mdx.body}</MDXRenderer>

				<AuthorBox />
			</Body>
		</Layout>
	)
}
