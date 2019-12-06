import styled from '@emotion/styled'


const InfoBox = styled.div`
	background: ${props => props.theme.colors.accent};
	padding: 2rem;
	box-shadow:  0 0 0 1px ${props => props.theme.colors.infoBoxBorder};
	border-radius: ${props => props.theme.tachyons.borderRadius.br2};
	line-height: ${props => props.theme.lineHeights.body};
      font-size: 14px;
      margin: 10px 0;
`
 export default InfoBox