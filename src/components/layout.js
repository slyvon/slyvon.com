// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

// Components and styles
import { ThemeProvider } from "theme-ui"
import { HomeHeadline, SubHeadline, ProjectTitle, YellowBox, ImageWide, WorkPageHeader, BadgeText, NoMarginHeadline } from "./components"
import theme from "../gatsby-plugin-theme-ui/index"
import Header from "./header"
import Footer from "./footer"
import AuthorBox from "./authorbox"


// Container CSS
export const Container = styled.div`
	background: ${props => props.theme.colors.background};
	transition: all 0.4s ease;
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
	max-width: ${props => (props.wide ? "64rem" : "555px")};
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
		border: 1px solid ${props => props.theme.colors.border};
		border-radius: 3px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
	}

	figcaption {
		text-align: center;
		font-size: 15px;
		line-height: 1.2;
		color: ${props => props.theme.colors.gray};
		margin-top: 12px;
	}

	iframe {
		border: 1px solid ${props => props.theme.colors.border};
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
			<ThemeProvider
				theme={theme}
				components={{ AuthorBox, YellowBox, Container, Body, ImageWide, HomeHeadline, SubHeadline, ProjectTitle, WorkPageHeader, BadgeText, NoMarginHeadline }}
			>
				<Global
					styles={css`
						html,
						body {
							height: 100%;
							margin: 0;
							font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
								"Helvetica Neue", Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
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
