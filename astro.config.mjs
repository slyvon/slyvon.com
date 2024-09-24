// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { targetBlank } from "./src/targetBlank";

export default defineConfig({
  site: "https://slyvon.netlify.app",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'slyvon.netlify.app' }]],
  },
});