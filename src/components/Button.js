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
  margin: 1.5em 2em 1.5em 0;
  max-width: fit-content;
  align-items: flex-start;
  text-shadow: 0 1px 0 rgba(0,0,0,0.03);
  transition: color 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),background-color 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),border-color 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),-webkit-box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),-webkit-transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
    :hover {
      -webkit-transform: translateY(-1.5px);
    transform: translateY(-1.5px);
    --webkit-box-shadow: 0 1px 5px 0 rgba(0,0,0,0.06);
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.06);
    }
`

export default Button