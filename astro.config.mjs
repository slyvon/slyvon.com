// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { targetBlank } from "@targetBlank";

export default defineConfig({
  site: "https://slyvon.netlify.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'slyvon.netlify.app' }]],
  },
});
