// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

// Components and styles
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import Header from "./header"
import Footer from "./footer"


// Styled Components
export const YellowBox = styled.div`
	background: ${props => props.theme.colors.yellowboxBG};
	padding: 2rem;
	border: 1px solid ${props => props.theme.colors.yellowboxBorder};
	border-radius: 2px;
	line-height: 1.5;
	font-size: 14px;
`

export const PageTitle = styled.h1`
	letter-spacing: -0.015em;
	margin-bottom: 3rem;
	font-size: 40px;
`

export const ImageWide = styled.div`
	width: auto;
	height: auto;
	

	@media (min-width: 700px) {
		max-width: calc(100% + 120px);
		margin-left: -60px;
		margin-right: -60px;
	}
`




// Container CSS
export const Container = styled.div`
	background: ${props => props.theme.colors.background};
	transition: all .4s ease;
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
		border: 1px solid ${props => props.theme.colors.border};
	}


	figcaption {
		text-align: center;
		font-size: 15px;
		line-height: 1.2;
		color: ${props => props.theme.colors.gray};
		margin-top: 10px;
	}
`

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
	
		
			<Container>
				<ThemeProvider theme={theme} components={{ YellowBox, PageTitle, Container, Body, ImageWide }}>
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
				
					<Header siteTitle={data.site.siteMetadata.title} />
					
					

					<main>{children}</main>

					<Footer />
				
				</ThemeProvider>
			</Container>
			
		
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
