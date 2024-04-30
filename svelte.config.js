import cloudflare from '@sveltejs/adapter-cloudflare';
import node from '@sveltejs/adapter-node';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: cloudflare(),
	}
};

export default config;
