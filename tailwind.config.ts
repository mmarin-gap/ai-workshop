/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./src/**/*.{js,ts,jsx,tsx,mdx}',
	'./src/app/globals.css',
  ],
  theme: {
	extend: {
	  colors: {
		primary: 'hsl(var(--primary-red))',
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		muted: 'hsl(var(--muted))',
		'muted-foreground': 'hsl(var(--muted-foreground))',
		card: 'hsl(var(--card))',
		'card-foreground': 'hsl(var(--card-foreground))',
		border: 'hsl(var(--border))',
		input: 'hsl(var(--input))',
		accent: 'hsl(var(--accent))',
		'accent-foreground': 'hsl(var(--accent-foreground))',
		destructive: 'hsl(var(--destructive))',
		'destructive-foreground': 'hsl(var(--destructive-foreground))',
	  },
	  fontFamily: {
		sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
	  },
	  borderRadius: {
		lg: '0.5rem',
		md: '0.375rem',
		sm: '0.25rem',
	  },
	},
  },
  plugins: [
	require('@tailwindcss/forms'),
	require('@tailwindcss/typography'),
	require('tailwindcss-animate'),
  ],
};
