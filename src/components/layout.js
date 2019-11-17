// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Global, css } from "@emotion/core"

// Components and styles
import { ThemeProvider, useColorMode } from "theme-ui"
import theme from "../styles/theme"
import Header from "./header"
import Footer from "./footer"


// Styled Components
export const ImageWide = styled.div`
	width: auto;
	height: auto;

	@media (min-width: 700px) {
		max-width: calc(100% + 120px);
		margin-left: -60px;
		margin-right: -60px;
	}
`

const YellowBox = styled.div`
	background: ${props => props.theme.colors.yellowBoxBG};
	padding: 2rem;
	border: 1px solid ${props => props.theme.colors.yellowBoxBorder};
	border-radius: 2px;
	font-size: ${props => props.theme.fonts.fontSizes.yellowBox};
	line-height: ${props => props.theme.fonts.lineHeights.yellowBox};
	color: ${props => props.theme.colors.yellowBoxText};
`

export const PageTitle = styled.h1`
	font-size: ${props => props.theme.fonts.fontSizes.pageTitle};
	font-weight: ${props => props.theme.fonts.fontWeights.pageTitle};
	letter-spacing: -0.015em;
	color: ${props => props.theme.colors.pageTitle};
	margin-bottom: 3rem;
`

// Container CSS
export const Container = styled.div`
	background-color: ${props => props.theme.colors.background};
	margin: 0 auto;
	padding-top: 0;
	display: flex;
	flex-direction: column;

	${props => props.theme.device.mobile} {
		margin-top: 0;
		padding-right: ${props => props.theme.gutter.default};
		padding-left: ${props => props.theme.gutter.default};
		position: relative;
	}
`

export const Body = styled.div`
	margin: 0 auto;
	max-width: ${props => (props.wide ? "740px" : "580px")};
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	@media all and (max-width: 800px) {
		.reverse-cols {
			display: flex;
			flex-flow: wrap;
			flex-direction: column-reverse;
		}
	}

	h2,
	h3,
	h4 {
		margin-top: 20px;
		margin-bottom: 20px;
		letter-spacing: -0.015em;
	}

	h1 {
		font-size: 2.5em;
		font-weight: 700;
		-webkit-letter-spacing: -0.015em;
		-moz-letter-spacing: -0.015em;
		-ms-letter-spacing: -0.015em;
		letter-spacing: -0.015em;
		color: ${props => props.theme.colors.H1};
		margin-bottom: 3rem;
	}

	h2 {
		font-size: ${props => props.theme.fonts.fontSizes.H2};
		font-weight: ${props => props.theme.fonts.fontWeights.H2};
		color: ${props => props.theme.colors.H2};
	}

	h3 {
		font-size: ${props => props.theme.fonts.fontSizes.H3};
		font-weight: ${props => props.theme.fonts.fontWeights.H3};
		color: ${props => props.theme.colors.H3};
	}

	h4 {
		line-height: ${props => props.theme.fonts.lineHeights.H4};
		font-size: ${props => props.theme.fonts.fontSizes.H4};
		font-weight: ${props => props.theme.fonts.fontWeights.H4};
		color: ${props => props.theme.colors.H4};
	}

	a {
		color: ${props => props.theme.colors.links};
		font-weight: ${props => props.theme.fonts.fontWeights.linkWeight};
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
		font-size: 95%;
		overflow-wrap: break-word;
		word-wrap: break-word;
		padding: 0.1rem 0.3rem 0.2rem;
		border-radius: 0.2rem;
	}

	p {
		font-size: ${props => props.theme.fonts.fontSizes.bodyText};
		line-height: ${props => props.theme.fonts.lineHeights.bodyText};
		color: ${props => props.theme.colors.text};
		margin-top: 0;
		margin-bottom: 1.5em;
	}

	li {
		margin-top: 0;
		margin-bottom: 1.3em;
		font-size: ${props => props.theme.fonts.fontSizes.bodyText};
		line-height: ${props => props.theme.fonts.lineHeights.bodyText};
		color: ${props => props.theme.colors.text};
	}

	ol,
	ul {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 50px;
	}

	figure {
		display: block;
		margin-inline-start: 10px;
		margin-inline-end: 10px;
		margin-top: 40px;
		margin-bottom: 60px;
	}

	figure img {
		border-radius: 3px;
		border: 1px solid ${props => props.theme.colors.figureIMGBorder};
	}

	hr {
		margin-top: 10px;
		margin-bottom: 20px;
		border: 0;
		width: 100%;
		border-top: 1px solid ${props => props.theme.colors.hrLine};
	}

	figcaption {
		text-align: center;
		font-size: ${props => props.theme.fonts.fontSizes.imageCaption};
		line-height: ${props => props.theme.fonts.lineHeights.imageCaption};
		color: ${props => props.theme.colors.imageCaption};
		margin-top: 10px;
	}
`

// Layout query
const Layout = ({ children }) => {
	const [colorMode, setColorMode] = useColorMode()
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
	
		
			<Container>
				<ThemeProvider theme={theme}>
			<Global
				styles={css`
					html,
					body {
						height: 100%;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
						-webkit-font-smoothing: antialiased;
						text-rendering: optimizeLegibility;
						/* The html and body elements cannot have any padding or margin. */
					}
				`}
			/>
				<MDXProvider components={{ YellowBox, Container, Body, ImageWide }}>
					<Header siteTitle={data.site.siteMetadata.title} />
					
					<button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>

					<main>{children}</main>

					<Footer />
				</MDXProvider>
				</ThemeProvider>
			</Container>
			
		
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
