// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { targetBlank } from "./src/targetBlank";

export default defineConfig({
  site: "https://slyvon.com",
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    "/blog/[...slug]": "/[...slug]"
  },
  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'slyvon.com' }]],
  },
});