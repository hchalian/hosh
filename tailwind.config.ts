import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-outfit)'],
      },
      colors: {
        gold: '#d1b06b',
        primary: '#1f2732',
      },
    },
  },
  plugins: [],
};
export default config;
