import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

// Styled Components

const FooterArea = styled.footer`
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
`;

const FooterText = styled.footer`
  display: block;
  color: #999;

`;

const FooterLink = styled(Link)`
  color: #999;
  text-decoration: none;

`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterText className="f6">© {new Date().getFullYear()} — Handcrafted by <FooterLink to="/">Sly</FooterLink> using GatsbyJS
      </FooterText>
    </FooterArea>
  )
}

export default Footer