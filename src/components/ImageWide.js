import styled from "@emotion/styled"

const ImageWide = styled.div`
	width: auto;
      height: auto;

	@media (min-width: 700px) {
		max-width: calc(100% + 120px);
		margin-left: -60px;
		margin-right: -60px;
	}
`
export default ImageWide