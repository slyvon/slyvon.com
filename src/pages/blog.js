import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"
import { Body } from "../components/layout"
import { Styled } from 'theme-ui'

// Styled Components
const BlogList = styled.h5`
	margin: 1.2rem 0;
	font-size: 18px;
	line-height: 1.5;
`


// Query
const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx(
				filter: { frontmatter: { type: { eq: "blog" } } }
				sort: { order: DESC, fields: [frontmatter___date] }
			) {
				edges {
					node {
						frontmatter {
							title
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Blog" />
				<Body>
				<Styled.h1>Things I've Written</Styled.h1>
			
				{data.allMdx.edges.map(edge => {
					return (
						<BlogList>
							<Styled.a as={Link} to={`${edge.node.fields.slug}`}>
								{edge.node.frontmatter.title}
							</Styled.a>
						</BlogList>
					)
				})}
			</Body>
		</Layout>
	)
}

export default BlogPage
