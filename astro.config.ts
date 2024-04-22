import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	output: "hybrid",
	integrations: [
		sitemap(),
	],
	adapter: cloudflare({
		imageService: "passthrough",
	}),
});
