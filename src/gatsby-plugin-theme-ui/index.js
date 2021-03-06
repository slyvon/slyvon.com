const offwhite = "#f7f7f7"
const darkmodeBG = "#222"
const darkmodeBodyText = "#ddd"
const darkest = "#222"
const catchyred = "#ed213a"
const bodytext = "#555"
const washedyellow = "#faf5d6"
const gray9 = "#999"
const gray7 = "#777"
const darklink = "#2d2d2d"

export default {
	initialColorModeName: "light",
	colors: {
		modes: {
			light: {
				background: offwhite,
				text: bodytext,
				primary: darklink,
				secondary: catchyred,
				accent: washedyellow,
				muted: gray9,
				gray: gray7,
				darken: darkest,
				EndOfPostBoxBG: "white",
				EndOfPostBoxBorder: "#ddd",
				infoBoxBorder: "#ddd280",
				codeBG: "#ddd",
				border: "#e6e6e6",
			},
			dark: {
				background: darkmodeBG,
				text: darkmodeBodyText,
				primary: offwhite,
				secondary: catchyred,
				accent: "#333",
				muted: gray9,
				gray: gray7,
				darken: "white",
				EndOfPostBoxBG: "#333",
				EndOfPostBoxBorder: darklink,
				infoBoxBorder: "rgba(0,0,0,0.05) 0 0 0 1px",
				codeBG: gray7,
				border: darklink,
			},
		},
	},
	fontWeights: {
		thinnest: 200,
		body: 400,
		bold: 500,
		heading: 800,
		fattest: 900,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	letterSpacings: {
		body: "normal",
		heading: "-.05em",
	},
	fontSizes: [12, 14, 18, 22.5, 28, 35.16, 43.95, 55, 68],
	text: {
		noMarginHeading: {
			marginBottom: 0,
			marginTop: 0,
		},
	},
	InfoBoxes: {
		yellow: {
			color: "text",
			background: "washedyellow"
		},
		red: {
			color: "text",
			background: "#000"
		}
	},
	styles: {
		p: {
			fontSize: 2,
			lineHeight: "body",
				strong: {
					color: "darken",
				},
		},
		img: {
			WebkitUserDrag: "none"
		},
		a: {
			fontWeight: "500",
			color: "primary",
			textDecoration: "none",
			borderBottom: "2px solid gray",
			"&:hover": {
				color: offwhite,
				backgroundColor: "secondary",
				borderBottom: "none",
				textDecoration: "none",
			},
		},
		h1: {
			fontSize: 6,
			color: "darken",
			fontWeight: "fattest",
			lineHeight: "heading",
			letterSpacing: "heading",
		},
		h2: {
			fontSize: 5,
			color: "darken",
			fontWeight: "heading",
			lineHeight: "heading",
			letterSpacing: "heading",
		},
		h3: {
			fontSize: 4,
			color: "darken",
			fontWeight: "heading",
			lineHeight: "heading",
			letterSpacing: "heading",
		},
		h4: {
			fontSize: 3,
			color: "darken",
			fontWeight: "heading",
			lineHeight: "heading",
			letterSpacing: "heading",
    },
    hr: {
			marginTop: "20px",
			marginBottom: "20px",
			border: 0,
			color: "border",
			borderTop: "1px solid",
			width: "100%",
			transition: "color .4s ease",
		},
		inlineCode: {
			backgroundColor: "codeBG",
      fontSize: "90%",
      fontFamily: "monospace",
			padding: "0.1rem 0.3rem 0.2rem",
			borderRadius: "0.2rem",
			wordWrap: "break-word",
			overflowWrap: "break-word",
		},
		li: {
			marginBottom: "1.1em",
			marginTop: 0,
			fontSize: "18px",
			lineHeight: "body",
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
			f1: "43.95px",
			f2: "35.16px",
			f3: "28.13px",
			f4: "22.5px",
			f5: "18px",
			f6: "14.4px",
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
			tracked: ".1em",
			tight: "-.05em",
			mega: ".25em",
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
