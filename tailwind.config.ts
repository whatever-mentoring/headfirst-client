import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FF6D6D',
        createStoryBtn: '#F34E4E',
        createStoryContentBg: '#F6F6F6',
        createStoryModalFont: '#535353',
        allCreateStoryContentFont: '#8E8E8E',
        allCreateStoryContentDate: '#878B93',
      },
      fontFamily: {
        StoryFont: ['SCDream6'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
