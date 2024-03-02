import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        moss: { 200: 'var(--moss-200)', 300: 'var(--moss-300)', 500: 'var(--moss-500)' },
        gray: {
          800: 'var(--gray-800)',
        },
        success: 'var(--success)',
      },
      fontFamily: {
        heineken: ['"HEINEKEN Core"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
