// Gatsby and React stuff
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

// Components and styles

import "../styles/tachyons.css"
import { css, Global } from "@emotion/core"
import styled from '@emotion/styled'
import Header from "./header"
import Footer from "./footer"
import { ThemeProvider } from 'emotion-theming'



// Site-wide constants

const theme = {
  colors: {
    links: '#111',
    linkUnderline: '#999',
    linkHover: '#fff',
    linkHoverBG: '#ed213a',
    imageCaption: '#888',
    codeBG: '#ddd',
    pageTitle: '#1b1b1b',
    content: 'rgba(0,0,0,.8)',
  },
  
  fontSizes: {
    pageTitle: '2.5em',
    H2: '1.62em',
    H3: '1.375em',
    H4: '1.2em',
    bodyText: '1.125em',
    yellowBox: '14px',
  },

  fontWeights: {
    pageTitle: '700',
    H2: '700',
    H3: '500',
    H4: '400',
    linkWeight: '500',
  },

  lineHeights: {
    H2: '1.2',
    H3: '1.4',
    H4: '1.5',
    bodyText: '1.5',
    yellowBox: '1.5',
    imageCaption: '1.2',
  },
};


// Styled Components



const HomeCenteredArea = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  vertical-align: middle;
`;

const HomeHeadline = styled.h1`
      margin-top: 0;
      line-height: 1;
`;

const SubHeadline = styled.h1`
      margin-top: 0;
      line-height: 1;
`;

const HomeAvatarImg = styled.img`
  width: 20%;

`;

const YellowBox = styled.div`
  background: #faf5d6;
  padding: 2rem;
  border: 1px solid #ddd280;
  border-radius: 2px;
  font-size: ${props => props.theme.fontSizes.yellowBox};
  line-height: ${props => props.theme.lineHeights.yellowBox};
  color: #111;
`;

const ImageCaption = styled.span`
  display: inherit;
  text-align: center;
  font-size: 15px;
  line-height: ${props => props.theme.lineHeights.imageCaption};
  color: ${props => props.theme.colors.imageCaption};
  margin-bottom: 40px;
  `;

export const PageTitle = styled.h1`
font-size: ${props => props.theme.fontSizes.pageTitle};
font-weight: ${props => props.theme.fontWeights.pageTitle};
letter-spacing: -0.015em;
color: ${props => props.theme.colors.pageTitle};
margin-bottom: 3rem;
`;


// Container CSS
export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media all and (max-width:800px){
  .reverse-cols {
  display: flex;
  flex-flow: wrap;
  flex-direction: column-reverse;}}

  a {
      color: ${props => props.theme.colors.links};
      font-weight: ${props => props.theme.fontWeights.linkWeight};
      text-decoration: none;
      border-bottom: 2px solid ${props => props.theme.colors.linkUnderline};
    }
    a:hover {
      color: ${props => props.theme.colors.linkHover};
      background: ${props => props.theme.colors.linkHoverBG};
      text-decoration: none;
      border-bottom: 0px;
    }
    
    
    
    code {
      background: ${props => props.theme.colors.codeBG};
      font-size: 75% !important;
      overflow-wrap: break-word;
      word-wrap: break-word;
      padding: 0.1rem 0.3rem 0.2rem;
      border-radius: 0.2rem;
    }
    
    
       p {
        font-size: ${props => props.theme.fontSizes.bodyText};
      line-height: ${props => props.theme.lineHeights.bodyText};
        color: ${props => props.theme.colors.content};
        margin-top: 0;
    margin-bottom: 1.5em;
        
       }

       li {
        margin-top: 0;
        margin-bottom: 1.3em;
        font-size: ${props => props.theme.fontSizes.bodyText};
        line-height: ${props => props.theme.lineHeights.bodyText};
        color: ${props => props.theme.colors.content};

       }

       ol,
      ul {
        display: block;
        margin-block-start: 2em;
        margin-block-end: 2em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 50px;
      }
    
      
     
p img {
  display: block;
  height: auto;
  margin: 1rem auto;
  max-width: 100%;
  border-radius: 3px;
}

h4 {
  line-height: ${props => props.theme.lineHeights.H4};
  font-size: ${props => props.theme.fontSizes.H4};
  font-weight: ${props => props.theme.fontWeights.H4};
  
}

h2,
h3,
h4 {
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: -0.015em;
}


h2 {
  font-size: ${props => props.theme.fontSizes.H2};
  font-weight: ${props => props.theme.fontWeights.H2};
}


h3 {
  font-size: ${props => props.theme.fontSizes.H3};
  font-weight: ${props => props.theme.fontWeights.H3};
}
   


      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #e6e6e6;
      }
      
      
`;



// Layout query
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

// Output
  return (
    <ThemeProvider theme={theme}>
      
       <Global styles={css`
        html, body {
            height: 100%;
            background-color: #f5f5f5;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;

            /* The html and body elements cannot have any padding or margin. */
        }
      `} />

    <MDXProvider components={{ YellowBox, ImageCaption, HomeCenteredArea, HomeHeadline, SubHeadline, HomeAvatarImg }} >
      <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
        </Container>
            <Footer />
    </MDXProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
