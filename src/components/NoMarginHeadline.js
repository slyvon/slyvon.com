import styled from "@emotion/styled"

const NoMarginHeadline = styled.h3`
      color: #444;
      font-weight: ${props => props.theme.fontWeights.heading};
      font-size: 28px;
      margin-top: 10px;
      margin-bottom: 0;
      line-height: ${props => props.theme.lineHeights.heading};
      letter-spacing: ${props => props.theme.letterSpacings.heading};
`

export default NoMarginHeadline