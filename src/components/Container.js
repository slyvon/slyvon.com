import styled from "@emotion/styled"

const Container = styled.div`
	background: ${props => props.theme.colors.background};
	transition: all 0.4s ease;
	margin: 0 auto;
	padding-top: 0;
	display: flex;
	flex-direction: column;

	${props => props.theme.device.mobile} {
		margin-top: 0;
		padding-right: ${props => props.theme.gutter.default};
		padding-left: ${props => props.theme.gutter.default};
		position: relative;
	}
`
export default Container
