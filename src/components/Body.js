import styled from "@emotion/styled"

const Body = styled.div`
	margin: 0 auto;
	max-width: ${props => (props.wide ? "64rem" : "555px")};
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	@media all and (max-width: 800px) {
		.reverse-cols {
			display: flex;
			flex-flow: wrap;
			flex-direction: column-reverse;
		}
	}

	ol,
	ul {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 50px;
	}

	figure {
		display: block;
		margin-inline-start: 10px;
		margin-inline-end: 10px;
		margin-top: 40px;
		margin-bottom: 60px;
	}

	figure img {
		border: 1px solid ${props => props.theme.colors.border};
		border-radius: 3px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
	}

	figcaption {
		text-align: center;
		font-size: 15px;
		line-height: 1.2;
		color: ${props => props.theme.colors.gray};
		margin-top: 12px;
	}

	iframe {
		border: 1px solid ${props => props.theme.colors.border};
	}
`
export default Body