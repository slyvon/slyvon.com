// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Global, css } from "@emotion/core"


// Components and styles
import { colors, type } from "./styles"
import "../styles/tachyons.css"
import Header from "./header"
import Footer from "./footer"

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
  font-size: ${type.fontSizes.yellowBox};
  line-height: ${type.lineHeights.yellowBox};
  color: #111;
`;

const ImageCaption = styled.span`
  display: inherit;
  text-align: center;
  font-size: 15px;
  line-height: ${type.lineHeights.imageCaption};
  color: ${colors.imageCaption};
  margin-bottom: 40px;
  `;

export const PageTitle = styled.h1`
font-size: ${type.fontSizes.pageTitle};
font-weight: ${type.fontWeights.pageTitle};
letter-spacing: -0.015em;
color: ${colors.pageTitle};
margin-bottom: 3rem;
`;


// Container CSS


const MainContainer = styled.div`
  background-color: #f5f5f5;
  margin: 0 auto;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  `;

export const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 550px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media all and (max-width:800px){
  .reverse-cols {
  display: flex;
  flex-flow: wrap;
  flex-direction: column-reverse;}
  }

  @media (min-width: 700px) {
    p img {
      max-width: calc(100% + 50px);

    width: auto;
    margin-left: -25px;
    margin-right: -25px;
    }
  }



  a {
      color: ${colors.links};
      font-weight: ${type.fontWeights.linkWeight};
      text-decoration: none;
      border-bottom: 2px solid ${colors.linkUnderline};
    }
    a:hover {
      color: ${colors.linkHover};
      background: ${colors.linkHoverBG};
      text-decoration: none;
      border-bottom: 0px;
    }
    
    
    
    code {
      background: ${colors.codeBG};
      font-size: 75% !important;
      overflow-wrap: break-word;
      word-wrap: break-word;
      padding: 0.1rem 0.3rem 0.2rem;
      border-radius: 0.2rem;
    }
    
    
       p {
        font-size: ${type.fontSizes.bodyText};
      line-height: ${type.lineHeights.bodyText};
        color: ${colors.content};
        margin-top: 0;
    margin-bottom: 1.5em;
        
       }

       li {
        margin-top: 0;
        margin-bottom: 1.3em;
        font-size: ${type.fontSizes.bodyText};
        line-height: ${type.lineHeights.bodyText};
        color: ${colors.content};

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
  border-radius: 2px;
  border: 1px solid #dad6e480;

}

h4 {
  line-height: ${type.lineHeights.H4};
  font-size: ${type.fontSizes.H4};
  font-weight: ${type.fontWeights.H4};
  
}

h2,
h3,
h4 {
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: -0.015em;
}


h2 {
  font-size: ${type.fontSizes.H2};
  font-weight: ${type.fontWeights.H2};
}


h3 {
  font-size: ${type.fontSizes.H3};
  font-weight: ${type.fontWeights.H3};
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

<React.Fragment>
  <Global styles={css`
    html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    /* The html and body elements cannot have any padding or margin. */
    }
  `} />

<MainContainer>
  <MDXProvider components={{ YellowBox, ImageCaption, HomeCenteredArea, HomeHeadline, SubHeadline, HomeAvatarImg }} >
    <Header siteTitle={data.site.siteMetadata.title} />
      <InnerContainer>
        <main>{children}</main>
      </InnerContainer>
          <Footer />
  </MDXProvider>
</MainContainer>
</React.Fragment>

)}

Layout.propTypes = {
children: PropTypes.node.isRequired,
}

export default Layout