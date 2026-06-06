import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import autoImports from "auto-imports";
import lintOverlay from 'vite-plugin-lint-overlay';


export default defineConfig({
	plugins: [
		preact(),
		autoImports(),
		lintOverlay({ eslint: false }),
		{ name: "autoClear", handleHotUpdate() { console.clear(); } }
	],

	server: {

		// allow devserver access on other devices
		host: true,

		// allow devserver access by domain like max.local
		allowedHosts: true,

		// auto open browser
		open: true,

	},
});
