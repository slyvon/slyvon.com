import React from "react"
import SEO from "../components/SEO"
import styled from '@emotion/styled'
import Body from "../components/Body"
import Avatar from "../components/Avatar"
import Button from "../components/Button"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "theme-ui"
import Container from "../components/Container"
import theme from "../gatsby-plugin-theme-ui/index"
import { Link } from "gatsby"

const HomeCenteredArea = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

const Muted = styled.span`
      color: ${props => props.theme.colors.muted};
`

const Pink = styled.span`
      color: ${props => props.theme.colors.secondary};
`

const HomeHeadline = styled.h1`
      color: ${props => props.theme.colors.darken};
      font-weight: ${props => props.theme.fontWeights.fattest};
      font-size: ${props => props.theme.tachyons.size.f1};
      letter-spacing: ${props => props.theme.letterSpacings.heading};
      margin-bottom: 30px;
      margin-top: 25px;
      line-height: 1;
      @media all and (max-width: 800px) {
          font-size: 49px;
		}
`  

const Byline = styled.p`
    font-weight: 300;
    line-height: 1.3;
    letter-spacing: ${props => props.theme.letterSpacings.heading};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.tachyons.size.f4};
    margin-bottom: 30px;
    margin-top: 0;
    @media all and (max-width: 800px) {
          font-size: 20px;
		}
`


const Home = () => (
<Container>
  <SEO />
			<ThemeProvider
				theme={theme}>
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

<Body>
<HomeCenteredArea>
<Avatar /> 
  <HomeHeadline>
   Hi, I'm Slyvon Blanco<Pink>.</Pink>
  </HomeHeadline>
  <Byline>
    I'm an independent web consultant, strategist, and designer who has a thing for simplifying complex ideas. <Muted>Welcome to my corner of the internet.</Muted>
  </Byline>
  <Link to="/about"><Button>About Sly ➝</Button></Link>
</HomeCenteredArea>
</Body>
			</ThemeProvider>
		</Container>


)

export default Home