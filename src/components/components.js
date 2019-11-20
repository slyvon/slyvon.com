import styled from '@emotion/styled'

export const HomeHeadline = styled.h1`
      color: ${props => props.theme.colors.darken};
      font-weight: ${props => props.theme.fontWeights.fattest};
      font-size: ${props => props.theme.tachyons.size.f1};
      letter-spacing: ${props => props.theme.letterSpacings.heading};
      margin-top: 0;
      margin-bottom: ${props => props.theme.tachyons.spacing.s2};
      line-height: 1;
     
`

export const WorkPageHeader = styled.div`
  padding-bottom: 20px;
`;

export const ProjectTitle = styled.h2`
      color: ${props => props.theme.colors.darken};
      font-weight: ${props => props.theme.fontWeights.fattest};
      font-size: ${props => props.theme.tachyons.size.f2};
      letter-spacing: ${props => props.theme.letterSpacings.heading};
      margin-top: 5px;
      margin-bottom: 10px;
      line-height: 1;
     
`

export const SubHeadline = styled.h5`
      color: ${props => props.theme.colors.gray};
      font-weight: ${props => props.theme.fontWeights.thinnest};
      font-size: ${props => props.theme.tachyons.size.f4};
      margin-top: 0;
      line-height: 1;
`

export const NoMarginHeadline = styled.h3`
      color: #444;
      font-weight: ${props => props.theme.fontWeights.heading};
      font-size: 28px;
      margin-top: 10px;
      margin-bottom: 0;
      line-height: ${props => props.theme.lineHeights.heading};
      letter-spacing: ${props => props.theme.letterSpacings.heading};
`

export const YellowBox = styled.div`
	background: ${props => props.theme.colors.yellowboxBG};
	padding: 2rem;
	border: 1px solid ${props => props.theme.colors.yellowboxBorder};
	border-radius: ${props => props.theme.tachyons.borderRadius.br2};
	line-height: 1.5;
      font-size: 16px;
      margin: 10px 0;
`

export const BadgeText = styled.span`
	box-sizing: border-box;
    max-width: fit-content;
    display: inline-block;
    vertical-align: baseline;
    font-size: 11.5px;
    font-weight: 600;
    white-space: nowrap;
    padding: 3px 5px;
    color: white;
    background-color: #333;
    border-radius: 2px;
    margin-bottom: 0;
    margin-top: 20px;
    text-transform: uppercase;
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

