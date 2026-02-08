import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lintOverlay from 'vite-plugin-lint-overlay';

export default defineConfig({
	plugins: [
		react(),
		lintOverlay({
			ts: true,
		})
	],

	// most common, very convenient alias
	resolve: {
		alias: { '@': '/src' },
	},

	// server - Only referes to devserver
	server: {
		host: true, // allows access from other devices
		allowedHosts: true, // allow access by any hostname
		open: true, // auto open browser
	},


});