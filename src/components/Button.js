import styled from '@emotion/styled'
import theme from "../gatsby-plugin-theme-ui/index"

const regular = theme.colors.modes.light.primary;
const outline = theme.colors.modes.light.background;

const Button = styled.button`
	background: ${props => props.outline ? outline : regular};
  color: ${props => props.outline ? regular : outline};
  cursor: pointer;
  font-weight: 700;
	border: 2px solid ${props => props.theme.colors.primary};
	border-radius: ${props => props.theme.tachyons.borderRadius.br2};
  font-size: ${props => props.theme.tachyons.size.f5};
  padding: 0.5em 1em;
  align-items: flex-start;
    :hover {
      box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
      transition: all 0.4s ease 0s;
    }
`

export default Button