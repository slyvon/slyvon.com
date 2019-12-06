// Gatsby, Plugins, and React stuff
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

// Components and styles
import { ThemeProvider } from "theme-ui"
import Badge from "./Badge"
import Body from "./Body"
import EndOfPostBox from "./EndOfPostBox"
import ImageWide from "./ImageWide"
import NoMarginHeadline from "./NoMarginHeadline"
import ProjectTitle from "./ProjectTitle"
import SubHeadline from "./SubHeadline"
import InfoBox from "./InfoBox"
import Button from "./Button"
import theme from "../gatsby-plugin-theme-ui/index"
import Header from "./Header"
import Footer from "./Footer"
import Container from "./Container"


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
<<<<<<< HEAD
				components={{ 
					Badge, 
					Body, 
					Button,
					EndOfPostBox, 
					ImageWide, 
					InfoBox, 
					 }}
=======
				components={{ BadgeText, Body, EndOfPostBox, ImageWide, NoMarginHeadline, ProjectTitle, SubHeadline, InfoBox, Button }}
>>>>>>> parent of 89554fa... 1.2
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
