export default {
  
	colors: {
		background: "#f5f5f5",
    text: "rgba(0,0,0,.8)",
    primary: "#111",
    secondary: "#ed213a",
    accent: "#999",
    muted: "#999",
    gray: "#777",
    darken: "#1b1b1b",
			modes: {
				dark: {
					background: "#000",
          text: "#fff",
          primary: "#fff",
          secondary: "#fff",
          accent: "#fff",
          muted: "#fff",
          gray: "#1b1b1b",
				}
			}
  },
  styles: {
    p: {
      fontSize: '18px',
      lineHeight: '1.5',
    },
    a: {
      fontWeight: "500",
      color: "primary",
    }
  },
	fonts: {
		fontSizes: {
			pageTitle: "2.5em",
			H2: "1.62em",
			H3: "1.375em",
			H4: "1.2em",
			bodyText: "1.125em",
			yellowBox: "14px",
		},

		fontWeights: {
			pageTitle: "700",
			H2: "700",
			H3: "600",
			H4: "500",
			linkWeight: "500",
		},

		lineHeights: {
			H2: "1.2",
			H3: "1.4",
			H4: "1.5",
			bodyText: "1.5",
			yellowBox: "1.5",
		},
	},
	tachyons: {
		spacing: {
			s0: "0",
			s1: ".25rem",
			s2: ".5rem",
			s3: "1rem",
			s4: "2rem",
			s5: "4rem",
			s6: "8rem",
			s7: "16rem",
		},
		size: {
			f1: "3rem",
			f2: "2.25rem",
			f3: "1.5rem",
			f4: "1.25rem",
			f5: "1rem",
			f6: ".875rem",
		},
		weight: {
			normal: "normal",
			b: "bold",
			fw1: "100",
			fw2: "200",
			fw3: "300",
			fw4: "400",
			fw5: "500",
			fw6: "600",
			fw7: "700",
			fw8: "800",
			fw9: "900",
		},
		maxwidth: {
			mw1: "1rem",
			mw2: "2rem",
			mw3: "4rem",
			mw4: "8rem",
			mw5: "16rem",
			mw6: "32rem",
			mw7: "48rem",
			mw8: "64rem",
			mw9: "96rem",
			mw100: "100%",
		},
		letterspacing: {
			tracked:  ".1em",
			tight: "-.05em",
			mega:  ".25em",
		},
		borderRadius: {
			br0: "0",
			br1: ".125rem",
			br2: ".25rem",
			br3: ".5rem",
			br4: "1rem",
			br100: "100%",
			brpill: "9999px",
		},
		
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