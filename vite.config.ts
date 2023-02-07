import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path, { dirname } from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@douganderson444/calendar-activity-heatmap': path.resolve('src/lib'),
			'@douganderson444/calendar-activity-heatmap/esm': path.resolve('package/esm')
		}
	},
	server: {
		fs: {
			strict: false
		}
	},
	test: {
		exclude: [
			'**/node_modules/**',
			'**/dist/**',
			'**/cypress/**',
			'**/.{idea,git,cache,output,temp}/**',
			'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
			'**/package/**'
		]
	}
});
