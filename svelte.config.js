import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const repoName = 'basketball-scoreboard'; // Change this to your repo name

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		},
		appDir: 'app',
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
