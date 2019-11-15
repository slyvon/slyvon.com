// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Global, css } from "@emotion/core"

// Components and styles
import { colors, type, device, gutter } from "../styles/styles"
import "../styles/tachyons.css"
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
	background: ${colors.yellowBoxBG};
	padding: 2rem;
	border: 1px solid ${colors.yellowBoxBorder};
	border-radius: 2px;
	font-size: ${type.fontSizes.yellowBox};
	line-height: ${type.lineHeights.yellowBox};
	color: ${colors.yellowBoxText};
`

export const PageTitle = styled.h1`
	font-size: ${type.fontSizes.pageTitle};
	font-weight: ${type.fontWeights.pageTitle};
	letter-spacing: -0.015em;
	color: ${colors.pageTitle};
	margin-bottom: 3rem;
`

// Container CSS
export const Container = styled.div`
	background-color: ${colors.mainContainerBG};
	margin: 0 auto;
	padding-top: 0;
	display: flex;
	flex-direction: column;

	${device.mobile} {
		margin-top: 0;
		padding-right: ${gutter.default};
		padding-left: ${gutter.default};
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
		color: ${colors.H1};
		margin-bottom: 3rem;
	}

	h2 {
		font-size: ${type.fontSizes.H2};
		font-weight: ${type.fontWeights.H2};
		color: ${colors.H2};
	}

	h3 {
		font-size: ${type.fontSizes.H3};
		font-weight: ${type.fontWeights.H3};
		color: ${colors.H3};
	}

	h4 {
		line-height: ${type.lineHeights.H4};
		font-size: ${type.fontSizes.H4};
		font-weight: ${type.fontWeights.H4};
		color: ${colors.H4};
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
		border: 1px solid ${colors.figureIMGBorder};
	}

	hr {
		margin-top: 10px;
		margin-bottom: 20px;
		border: 0;
		width: 100%;
		border-top: 1px solid ${colors.hrLine};
	}

	figcaption {
		text-align: center;
		font-size: ${type.fontSizes.imageCaption};
		line-height: ${type.lineHeights.imageCaption};
		color: ${colors.imageCaption};
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
		<React.Fragment>
			<Global
				styles={css`
					html,
					body {
						height: 100%;
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
							"Helvetica Neue", Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
						-webkit-font-smoothing: antialiased;
						text-rendering: optimizeLegibility;
						/* The html and body elements cannot have any padding or margin. */
					}
				`}
			/>

			<Container>
				<MDXProvider components={{ YellowBox, Container, Body, ImageWide }}>
					<Header siteTitle={data.site.siteMetadata.title} />

					<main>{children}</main>

					<Footer />
				</MDXProvider>
			</Container>
		</React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
