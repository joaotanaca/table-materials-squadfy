import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        moss: { 200: 'var(--moss-200)', 300: 'var(--moss-300)' },
        success: 'var(--success)',
      },
    },
  },
  plugins: [],
};
export default config;
