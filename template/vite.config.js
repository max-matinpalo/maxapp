import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lintOverlay from 'vite-plugin-lint-overlay';

export default defineConfig({
	plugins: [
		react(),
		lintOverlay({ estlint: false, })
	],

	server: {

		// to alloc devserver access on other devices
		host: true,

		// to allow devserver access by domain like max.local
		allowedHosts: true,

		// to auto open browser
		open: true,

	},
});