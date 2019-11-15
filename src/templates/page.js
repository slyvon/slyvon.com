import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Body } from "../components/layout"


import Layout from "../components/layout"
import SEO from "../components/seo"




export const pageQuery = graphql`
  query SinglePageQuery($slug: String) {
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
    
    <MDXRenderer>{mdx.body}</MDXRenderer>
    </Body>
  
    </Layout>
    
  )
}





