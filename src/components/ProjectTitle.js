import styled from "@emotion/styled"

const ProjectTitle = styled.h2`
      color: ${props => props.theme.colors.darken};
      font-weight: ${props => props.theme.fontWeights.fattest};
      font-size: ${props => props.theme.tachyons.size.f2};
      letter-spacing: ${props => props.theme.letterSpacings.heading};
      margin-top: 5px;
      margin-bottom: 10px;
      line-height: 1;
`
export default ProjectTitle