import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui/index"

const regular = theme.colors.modes.light.gray;
const outline = theme.colors.modes.light.background;

const Badge = styled.li`
    box-sizing: border-box;
    max-width: fit-content;
    display: inline-block;
    vertical-align: baseline;
    font-size: 11.5px;
    font-weight: 600;
    white-space: nowrap;
    padding: 3px 5px;
    color: ${props => props.outline ? regular : outline};
    background-color: ${props => props.outline ? outline : regular};
    border-radius: 2px;
    border: 1px solid ${props => props.outline ? regular : outline};
    margin-bottom: 5px;
    margin-right: .25em;
    text-transform: uppercase;
`
export default Badge