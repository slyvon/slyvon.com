// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

// Components and styles
import { ThemeProvider } from "theme-ui"
import Avatar from "./Avatar"
import Badge from "./Badge"
import Body from "./Body"
import EndOfPostBox from "./EndOfPostBox"
import ImageWide from "./ImageWide"
import InfoBox from "./InfoBox"
import Button from "./Button"
import theme from "../gatsby-plugin-theme-ui/index"
import Header from "./Navbar"
import Footer from "./Footer"
import Container from "./Container"
import Subheadline from "./Subheadline"


// Adjustable width inner container


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
				components={{ 
					Avatar,
					Badge, 
					Body, 
					Button,
					EndOfPostBox, 
					ImageWide, 
					InfoBox,
					Subheadline,
					 }}
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
