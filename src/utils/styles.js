 module.exports = {
    colors: {
      links: '#111',
      linkUnderline: '#999',
      linkHover: '#fff',
      linkHoverBG: '#ed213a',
      imageCaption: '#888',
      codeBG: '#ddd',
      pageTitle: '#1b1b1b',
      content: 'rgba(0,0,0,.8)',
    },
    type: {
      fontSizes: {
        pageTitle: '2.5em',
        H2: '1.62em',
        H3: '1.375em',
        H4: '1.2em',
        bodyText: '1.125em',
        yellowBox: '14px',
        imageCaption: '15px',
      },
    
      fontWeights: {
        pageTitle: '700',
        H2: '700',
        H3: '600',
        H4: '500',
        linkWeight: '500',
      },
    
      lineHeights: {
        H2: '1.2',
        H3: '1.4',
        H4: '1.5',
        bodyText: '1.5',
        yellowBox: '1.5',
        imageCaption: '1.2',
      }
    },
    device: {
      mobile: `@media (min-width: 320px)`,
      phablet: `@media (min-width: 550px)`,
      tablet: `@media (min-width: 750px)`,
      desktop: `@media (min-width: 1000px)`,
      xl: `@media (min-width: 1200px)`,
      xxl: `@media (min-width: 1600px)`,
    },
    animation: {
      curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
      curveExpo: `cubic-bezier(.17, .67, .83, .67)`,
      speedDefault: `200ms`,
      speedFast: `100ms`,
      speedSlow: `350ms`,
    },
    elevation: {
      raised: 10,
      overlay: 20,
    },
    gutter: {
      default: `1.25rem`,
      tablet: `2.5rem`,
      desktop: `3.75rem`,
    },
    offset: `45vw`,
    offsetXxl: `45rem`,
}