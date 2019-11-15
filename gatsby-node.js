const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === "Mdx") {
		const slug = path.basename(node.fileAbsolutePath, ".mdx")
		createNodeField({
			node,
			name: "slug",
			value: slug,
		})
	}
}

// Pages
module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const pageTemplate = path.resolve("./src/templates/page.js")
	const widepageTemplate = path.resolve("./src/templates/wide-page.js")
	const blogTemplate = path.resolve("./src/templates/blog-post.js")
	const res = await graphql(`
		query {
			pageMdx: allMdx(filter: { frontmatter: { type: { eq: "page" } } }) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			widepageMdx: allMdx(filter: { frontmatter: { type: { eq: "wide" } } }) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			blogMdx: allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	res.data.pageMdx.edges.forEach(edge => {
		createPage({
			component: pageTemplate,
			path: `/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug,
			},
		})
	})

	res.data.widepageMdx.edges.forEach(edge => {
		createPage({
			component: widepageTemplate,
			path: `/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug,
			},
		})
	})

	res.data.blogMdx.edges.forEach(edge => {
		createPage({
			component: blogTemplate,
			path: `/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug,
			},
		})
	})
}
