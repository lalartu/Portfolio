import adapter from '@sveltejs/adapter-static';
/* import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; */
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(
      {pages: 'netlify',
      assets: 'netlify',
      fallback: undefined,
      precompress: false,
      strict:true}
,    )
  },
  /* preprocess: vitePreprocess() */
};
export default config;