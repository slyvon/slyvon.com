import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from '@emotion/styled'
import { PageTitle } from "../components/layout"

// Styled Components
const BlogList = styled.h5`
  margin: 1.5rem 0;
  font-size: 18px;
  line-height: 1.5;
`;


// Query
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx (
        filter: { frontmatter: { type: {eq: "blog"}}}
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
    
    <PageTitle>Things I've Written</PageTitle>
    
      {data.allMdx.edges.map((edge) => {
        return (

            <BlogList>
              <Link to={`${edge.node.fields.slug}`}>{edge.node.frontmatter.title}
              </Link>
              </BlogList>
         
        )
      })}
  </Layout>
  )
  }

export default BlogPage