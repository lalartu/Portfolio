import adapter from '@sveltejs/adapter-static';
/* import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; */
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(
      {pages: 'vercel',
      assets: 'vercel',
      fallback: undefined,
      precompress: false,
      out: 'public',
      strict:true}
,    )
  },
  /* preprocess: vitePreprocess() */
};
export default config;