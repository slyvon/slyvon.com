
// Dark mode button for header.js


const DarkModeLink = styled.a`
  text-decoration: none;
`;

const DarkModeIcon = styled.svg`
height: 17px;
  width: 17px;
  display: block;
  float: right;
  fill: #777;
`;

<DarkModeLink onClick="#" id="darkSwitch" className="f5">
	  <DarkModeIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2v16a8 8 0 1 0 0-16zm0 18a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></DarkModeIcon>
</DarkModeLink>


///



///

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media all and (max-width:800px){
  .reverse-cols {
  display: flex;
  flex-flow: wrap;
  flex-direction: column-reverse;}
  }

  @media (min-width: 700px) {
    p img {
      max-width: calc(100% + 50px);

    width: auto;
    margin-left: -25px;
    margin-right: -25px;
    }
}


  a {
      color: ${props => props.theme.colors.links};
      font-weight: ${props => props.theme.fontWeights.linkWeight};
      text-decoration: none;
      border-bottom: 2px solid ${props => props.theme.colors.linkUnderline};
    }
    a:hover {
      color: ${props => props.theme.colors.linkHover};
      background: ${props => props.theme.colors.linkHoverBG};
      text-decoration: none;
      border-bottom: 0px;
    }
    
    
    
    code {
      background: ${props => props.theme.colors.codeBG};
      font-size: 75% !important;
      overflow-wrap: break-word;
      word-wrap: break-word;
      padding: 0.1rem 0.3rem 0.2rem;
      border-radius: 0.2rem;
    }
    
    
       p {
        font-size: ${props => props.theme.fontSizes.bodyText};
      line-height: ${props => props.theme.lineHeights.bodyText};
        color: ${props => props.theme.colors.content};
        margin-top: 0;
    margin-bottom: 1.5em;
        
       }

       li {
        margin-top: 0;
        margin-bottom: 1.3em;
        font-size: ${props => props.theme.fontSizes.bodyText};
        line-height: ${props => props.theme.lineHeights.bodyText};
        color: ${props => props.theme.colors.content};

       }

       ol,
      ul {
        display: block;
        margin-block-start: 2em;
        margin-block-end: 2em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 50px;
      }
    
      
     
p img {
  display: block;
  border-radius: 2px;
  border: 1px solid #dad6e480;

}

h4 {
  line-height: ${props => props.theme.lineHeights.H4};
  font-size: ${props => props.theme.fontSizes.H4};
  font-weight: ${props => props.theme.fontWeights.H4};
  
}

h2,
h3,
h4 {
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: -0.015em;
}


h2 {
  font-size: ${props => props.theme.fontSizes.H2};
  font-weight: ${props => props.theme.fontWeights.H2};
}


h3 {
  font-size: ${props => props.theme.fontSizes.H3};
  font-weight: ${props => props.theme.fontWeights.H3};
}
   


      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #e6e6e6;
      }
      
      
`;