import React from "react"
import styled from '@emotion/styled'
import Avatar from "../images/sly-avatar-no-bg.svg"

// Styled Components
const Box = styled.div`
  
`;

const AuthorBoxContent = styled.p`
   font-size: 15px !important;
  margin-bottom: 0px !important;
`;

const AboutTheAuthor = styled.h1`
   margin-top: 0px;
`;

const AuthorBoxImg = styled.img`
 float: right;
  width: 20%;
  margin: 0 0 0 1rem;

`;

const AuthorBox = () => {
  return (
    <Box className="bg-white mv4 pa4 br3 ba bw1 b--light-gray lh-copy black-80">
  <AboutTheAuthor className="mb2 f3 tracked-tight">About the Author</AboutTheAuthor>
  <AuthorBoxImg src={Avatar} />
  <AuthorBoxContent className="lh-copy">
    Slyvon Blanco is an independent business strategist, web designer &
    developer, and a copywriter. When he's not talking about himself in 3rd
    person, you'll most likely find him at a coffee shop drinking a flat white,
    at a gym lifting heavy things, or at a restaurant eating chicken wings.
  </AuthorBoxContent>
</Box>
  )
}

export default AuthorBox