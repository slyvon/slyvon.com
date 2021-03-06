import styled from "@emotion/styled"

const Subheadline = styled.h3`
    font-weight: 200;
    line-height: 1.3;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.tachyons.size.f4};
    margin-bottom: 30px;
    margin-top: 0;
`
export default Subheadline